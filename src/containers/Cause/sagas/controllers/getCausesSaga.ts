import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  getCauseSuccessAction,
  getCauseFailAction
} from 'containers/Cause/actions';

function* getCausesSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/cause');
    yield put(getCauseSuccessAction(data));
  } catch (err) {
    yield put(getCauseFailAction(err));
  }
}

export default getCausesSaga;