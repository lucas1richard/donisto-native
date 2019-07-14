import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import { getCauseAction } from 'containers/Cause/actions';

function* getCausesSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/cause');
    yield put(getCauseAction.Success(data));
  } catch (err) {
    yield put(getCauseAction.Fail(err));
  }
}

export default getCausesSaga;