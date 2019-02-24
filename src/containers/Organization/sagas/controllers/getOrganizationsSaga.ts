import { put, call } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  getOrgActionSuccess,
  getOrgFailAction
} from 'containers/Organization/actions';

function* getOrgSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/organization');
    yield put(getOrgActionSuccess(data));
  } catch (err) {
    yield put(getOrgFailAction(err));
  }
}

export default getOrgSaga;
