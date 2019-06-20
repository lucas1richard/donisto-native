import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  getContactCausesSuccessAction,
  getContactCausesFailAction
} from 'containers/Cause/actions';

function* getContactCausesSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/cause/contact');
    yield put(getContactCausesSuccessAction(data));
  } catch (err) {
    yield put(getContactCausesFailAction(err));
  }
}

export default getContactCausesSaga;