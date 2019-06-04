import { call, put } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  getCauseDetailSuccessAction,
  getCauseDetailFailAction,
  IGetCauseDetailAction
} from 'containers/Cause/actions';

function* getCausesDetailsSaga(action: IGetCauseDetailAction) {
  try {
    const { data } = yield call(api, 'post', '/v1/cause/detail', { cause_uuids: action.cause_uuids });
    yield put(getCauseDetailSuccessAction(data));
  } catch (err) {
    yield put(getCauseDetailFailAction(err));
  }
}

export default getCausesDetailsSaga;