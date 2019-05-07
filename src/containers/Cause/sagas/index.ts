import { takeLatest, all } from 'redux-saga/effects';
import CauseConstants from '../constants';
import createCauseSaga from './controllers/createCauseSaga';
import getCausesSaga from './controllers/getCausesSaga';

export function* causeSaga() {
  yield all([
    takeLatest(CauseConstants.CREATE_CAUSE_ACTION, createCauseSaga),
    takeLatest(CauseConstants.GET_CAUSE_ACTION, getCausesSaga)
  ]);
}

export default causeSaga;
