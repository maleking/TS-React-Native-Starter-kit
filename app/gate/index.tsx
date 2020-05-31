import api from './api';

const auth = {
  // checkUser: () => api.get('get/check/user'),
  //
  // signIn: (data: any) => api.sign('in', data),
  // signInConfirmation: (data: any) => api.sign('inConf', data),
  //
  // signOut: () => api.signOut(),
  //
  // signUp: (data: any) => api.sign('up', data),
  // signUpConfirmation: (data: any) => api.sign('upConf', data),
};
export const movie = {

};
export const profile = {

};
export default {

  ...profile,
  ...auth,
  ...movie,
};
