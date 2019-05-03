import logger from 'utilities/logger';

import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  getDonationsSuccessAction,
  getDonationsFailAction
} from 'containers/Donations/actions';

function* getDonationsSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/donation');
    yield put(getDonationsSuccessAction(data));
    yield call(logger.log, 'getDonationsSaga', 'donations - getDonationsSaga');
  } catch (err) {
    yield put(getDonationsFailAction(err));
    logger.error(err, 'donations - getDonationsSaga');
  }
}

export default getDonationsSaga;
