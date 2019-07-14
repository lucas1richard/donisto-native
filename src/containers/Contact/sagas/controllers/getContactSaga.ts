import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import { getContactAction } from 'containers/Contact/actions';

function* getContactSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/contact/get');
    yield put(getContactAction.Success(data));
  } catch (err) {
    yield put(getContactAction.Fail(err.message));
  }
}

export default getContactSaga;
