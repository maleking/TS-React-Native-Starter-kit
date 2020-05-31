import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import {setupCache} from 'axios-cache-adapter';

import CacheStorage from 'helpers/CacheStorage';
import {showMessage, isStringMatchWithAnyOfRegex} from 'helpers/util';
import tokenHelper from 'helpers/token';
import {apiUrl} from 'helpers/config';
import {t} from 'i18n';

const includeURL = [

];
const maxAge = 12 * 60 * 60 * 1000; //12 hours
const requestTimeout = 30 * 1000;
const cache = setupCache({
  maxAge,
  readOnError: error => {
    return (
      (error.response.status >= 400 && error.response.status < 600) ||
      !error.response?.status
    );
  },
  clearOnStale: false,
  debug: false,
  store: new CacheStorage(),
  exclude: {
    filter: request => {
      return !isStringMatchWithAnyOfRegex(request.url, includeURL);
    },
  },
});

const client = axios.create({
  baseURL: apiUrl,
  adapter: cache.adapter,
  timeout: requestTimeout,
});
client.interceptors.response.use(
  function(response) {
    if (response.data.status === 'success' && response.data.message) {
      showMessage({text: response.data.message});
    }
    return response;
  },
  function(error) {
    const responseStatus = error?.response?.status + '';

    if (responseStatus.match(/^5\d{2}$/)) {
      showMessage(t('app.defaultErrorMessage'));
    } else if (responseStatus === '401' || responseStatus === '403') {
      showMessage(t('app.unauthorizedMessage'));
      //TODO
      // store.dispatch(logout);
    }

    return Promise.reject(error);
  },
);

const call = async (
  method: string,
  url: string,
  group?: string[] = [],
  data?: object = {},
) => {
  const token = await tokenHelper.get();

  let p;

  if (!token) {
    p = Array.prototype.join.call(group, '/');
  } else if (typeof group !== 'string') {
    p = Array.prototype.join.call(
      group.filter(g => g !== 'ghost'),
      '/',
    );
  }

  const pre =
    group.length && group.includes('ghost')
      ? p
      : Array.prototype.join.call(group, '/');

  const u = pre + url;

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token !== '') {
    headers.Authorization = `Bearer ${token}`;
  }

  const request = {headers, method, url: u};

  if (!isEmpty(data)) {
    if (method === 'get') {
      request.params = data;
    } else {
      request.data = data;
    }
  }

  try {
    const response = await client(request);

    return Promise.resolve(response.data);
  } catch (error) {
    var err = null;
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      err = error.response;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      err = {message: error.request._response};
    } else {
      // Something happened in setting up the request that triggered an Error
      err = error;
    }
    return Promise.reject(err);
  }
};

const auth = {
  async sign(type, data) {
    let url = '';
    if (type === 'in') {
      url = 'login/send-code';
    } else if (type === 'inConf') {
      url = 'login';
    } else if (type === 'up') {
      url = 'create/register';
    } else if (type === 'upConf') {
      url = 'login';
    }

    return new Promise((resolve, reject) => {
      client({
        data,
        method: 'post',
        url,
      })
        .then(response => resolve(response.data))
        .catch(error => {
          var err = null;
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xxsign
            // console.log('err res', error.response);
            err = error.response;
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            // console.log('err req', error.request._response);
            err = {message: error.request._response};
          } else {
            // Something happened in setting up the request that triggered an Error
            // console.log('err', error);
            err = error;
          }
          return reject(err);
        });
    });
  },

  async signOut() {
    tokenHelper.clear();
    // #TODO
    // call('post', 'sign-out')
  },
};

export default {
  ...auth,

  delete: (url: string, guest?: string[], data?: object) =>
    call('delete', url, guest, data),
  get: (url: string, guest?: string[], data?: object) =>
    call('get', url, guest, data),
  patch: (url: string, guest?: string[], data?: object) =>
    call('patch', url, guest, data),
  post: (url: string, guest?: string[], data?: object) =>
    call('post', url, guest, data),
  put: (url: string, guest?: string[], data?: object) =>
    call('put', url, guest, data),
};
