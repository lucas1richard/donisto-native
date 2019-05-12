import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  getContactSuccessAction,
  getContactFailAction
} from 'containers/Contact/actions';

function* getContactSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/contact/get');
    yield put(getContactSuccessAction(data));
  } catch (err) {
    yield put(getContactFailAction(err.message));
  }
}

export default getContactSaga;
