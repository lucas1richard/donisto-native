import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import { getOrgNewsFeedAction } from 'containers/Contact/actions';

function* getOrgNewsFeedSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/contact/orgnewsfeed');
    yield put(getOrgNewsFeedAction.Success(data));
  } catch (err) {
    yield put(getOrgNewsFeedAction.Fail(err));
  }
}

export default getOrgNewsFeedSaga;
