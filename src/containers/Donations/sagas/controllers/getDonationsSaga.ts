import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import { getDonationsAction } from 'containers/Donations/actions';

function* getDonationsSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/donation');
    yield put(getDonationsAction.Success(data));
  } catch (err) {
    yield put(getDonationsAction.Fail(err));
  }
}

export default getDonationsSaga;
