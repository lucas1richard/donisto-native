import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import { getOrgNewsFeedSuccessAction, getOrgNewsFeedFailAction } from 'containers/Contact/actions';

function* getOrgNewsFeedSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/contact/orgnewsfeed');
    yield put(getOrgNewsFeedSuccessAction(data));
  } catch (err) {
    yield put(getOrgNewsFeedFailAction(err));
  }
}

export default getOrgNewsFeedSaga;
