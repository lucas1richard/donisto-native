import { put, call } from 'redux-saga/effects';
import api from 'utilities/api';
import { getOrgAction } from 'containers/Organization/actions';

function* getOrgSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/organization');
    yield put(getOrgAction.Success(data));
  } catch (err) {
    yield put(getOrgAction.Fail(err));
  }
}

export default getOrgSaga;
