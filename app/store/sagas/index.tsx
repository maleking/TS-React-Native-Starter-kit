import {all, fork} from 'redux-saga/effects';
import {networkSaga} from 'react-native-offline';

import user from './user';

export default function* root() {
  yield all([
    fork(user),
    fork(networkSaga, {pingInterval: 20000, pingInBackground: true}),
  ]);
}
