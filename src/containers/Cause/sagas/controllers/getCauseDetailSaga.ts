import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import { getCauseDetailAction } from 'containers/Cause/actions';
import { ICauseActions } from 'containers/Cause/types/actions';

function* getCausesDetailsSaga(action: ICauseActions.GetCauseDetail['WithUuids']) {
  try {
    const { data } = yield call(api, 'post', '/v1/cause/detail', { cause_uuids: action.cause_uuids });
    yield put(getCauseDetailAction.Success(data));
  } catch (err) {
    yield put(getCauseDetailAction.Fail(err));
  }
}

export default getCausesDetailsSaga;