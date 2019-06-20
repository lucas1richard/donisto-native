import { put, call } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  getDiscoverOrgsSuccessAction,
  getDiscoverOrgsFailAction
} from 'containers/Organization/actions';

function* getDiscoverOrgsSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/organization/discover');
    yield put(getDiscoverOrgsSuccessAction(data));
  } catch (err) {
    yield put(getDiscoverOrgsFailAction(err));
  }
}

export default getDiscoverOrgsSaga;
