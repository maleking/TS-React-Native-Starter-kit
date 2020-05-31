import {all, delay, put, takeLatest, call, select} from 'redux-saga/effects';

import {login, loginSuccess, logout} from 'store/reducers/user';
import gate from 'gate';
import token from 'helpers/token';

function* loginSaga({payload}) {
  token.set(payload.token);
  yield put({type: loginSuccess.type});
}

function* logoutSaga() {
  token.clear();
  yield call(gate.signOut);
}
export default function* root() {
  yield all([
    takeLatest(login.type, loginSaga),
    takeLatest(logout.type, logoutSaga),
  ]);
}
