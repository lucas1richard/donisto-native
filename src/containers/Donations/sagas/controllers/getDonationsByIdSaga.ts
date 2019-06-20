import logger from 'utilities/logger';

import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  getDonationsSuccessAction,
  getDonationsFailAction,
  IGetDonationsByIdAction
} from 'containers/Donations/actions';

function* getDonationsByIdSaga(action: IGetDonationsByIdAction) {
  try {
    const { data } = yield call(api, 'post', '/v1/donation/id', { ids: action.ids });
    yield put(getDonationsSuccessAction(data));
    yield call(logger.log, 'getDonationsByIdSaga', 'donations - getDonationsByIdSaga');
  } catch (err) {
    yield put(getDonationsFailAction(err));
    logger.error(err, 'donations - getDonationsByIdSaga');
  }
}

export default getDonationsByIdSaga;
