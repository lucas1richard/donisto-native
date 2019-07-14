import { put, call } from 'redux-saga/effects';
import api from 'utilities/api';
import { getDiscoverOrgs } from 'containers/Organization/actions';

function* getDiscoverOrgsSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/organization/discover');
    yield put(getDiscoverOrgs.Success(data));
  } catch (err) {
    yield put(getDiscoverOrgs.Fail(err));
  }
}

export default getDiscoverOrgsSaga;
