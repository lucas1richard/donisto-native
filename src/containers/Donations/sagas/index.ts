import { takeLatest, all } from 'redux-saga/effects';
import DonationsConstants from '../constants';
import defaultSaga from './controllers/defaultSaga';

// Individual exports for testing
export function* donationsSaga() {
  yield all([
    takeLatest(DonationsConstants.DEFAULT_ACTION, defaultSaga)
  ]);
}

// All sagas to be loaded
export default defaultSaga;
