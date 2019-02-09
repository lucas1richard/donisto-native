import { all, takeLatest } from 'redux-saga/effects';
import getContact from './controllers/getContact';
import LoginConstants from '../constants';
import makeContact from './controllers/makeContact';
import loginSaga from './controllers/loginSaga';

function* loginSagas() {
  yield all([
    takeLatest(LoginConstants.TEST, getContact),
    takeLatest(LoginConstants.MAKE_CONTACT, makeContact),
    takeLatest(LoginConstants.LOGIN, loginSaga)
  ]);
}

export default loginSagas;
