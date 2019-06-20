import { takeLatest, all } from 'redux-saga/effects';
import CauseConstants from '../constants';
import createCauseSaga from './controllers/createCauseSaga';
import getCausesSaga from './controllers/getCausesSaga';
import getCausesDetailsSaga from './controllers/getCauseDetailSaga';
import getContactCausesSaga from './controllers/getContactCausesSaga';

export function* causeSaga() {
  yield all([
    takeLatest(CauseConstants.CREATE_CAUSE_ACTION, createCauseSaga),
    takeLatest(CauseConstants.GET_CAUSE_ACTION, getCausesSaga),
    takeLatest(CauseConstants.GET_CONTACT_CAUSES_ACTION, getContactCausesSaga),
    takeLatest(CauseConstants.GET_CAUSE_DETAIL_ACTION, getCausesDetailsSaga),
  ]);
}

export default causeSaga;
