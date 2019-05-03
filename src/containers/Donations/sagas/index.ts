import { takeLatest, all } from 'redux-saga/effects';
import DonationsConstants from '../constants';
import getDonationsSaga from './controllers/getDonationsSaga';
import createDonationSaga from './controllers/createDonationSaga';

export function* donationsSaga() {
  yield all([
    takeLatest(DonationsConstants.GET_DONATIONS, getDonationsSaga),
    takeLatest(DonationsConstants.CREATE_DONATION, createDonationSaga),
  ]);
}

export default donationsSaga;
