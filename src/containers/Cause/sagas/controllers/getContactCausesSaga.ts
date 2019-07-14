import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import { getContactCausesAction } from 'containers/Cause/actions';

function* getContactCausesSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/cause/contact');
    yield put(getContactCausesAction.Success(data));
  } catch (err) {
    yield put(getContactCausesAction.Fail(err));
  }
}

export default getContactCausesSaga;