import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import { getDonationsAction } from 'containers/Donations/actions';
import { IDonationActions } from 'containers/Donations/types/actions';

function* getDonationsByIdSaga(action: IDonationActions.GetDonationsById['WithUuids']) {
  try {
    const { data } = yield call(api, 'post', '/v1/donation/id', { ids: action.data });
    yield put(getDonationsAction.Success(data));
  } catch (err) {
    yield put(getDonationsAction.Fail(err));
  }
}

export default getDonationsByIdSaga;
