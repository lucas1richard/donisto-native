import { takeLatest, all } from 'redux-saga/effects';
import DonationsConstants from '../constants';
import getDonationsSaga from './controllers/getDonationsSaga';
import createDonationSaga from './controllers/createDonationSaga';
import getDonationsByIdSaga from './controllers/getDonationsByIdSaga';

export function* donationsSaga() {
  yield all([
    takeLatest(DonationsConstants.GET_DONATIONS, getDonationsSaga),
    takeLatest(DonationsConstants.CREATE_DONATION, createDonationSaga),
    takeLatest(DonationsConstants.GET_DONATIONS_BY_ID, getDonationsByIdSaga),
  ]);
}

export default donationsSaga;
