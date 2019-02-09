import RegistrationConstants from '../constants';
import { all, takeLatest } from 'redux-saga/effects';
import submitBasicInfoSaga from './controllers/submitBasicInfoSaga';

function* registrationSagas() {
  yield all([
    takeLatest(RegistrationConstants.SUBMIT_BASIC_INFO, submitBasicInfoSaga)
  ]);
}

export default registrationSagas;
