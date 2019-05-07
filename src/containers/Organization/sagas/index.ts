import { takeLatest, all, fork } from 'redux-saga/effects';
import OrganizationConstants from '../constants';
import defaultSaga from './controllers/defaultSaga';
import registerOrgSaga from './controllers/registerOrganizationSaga';
import getOrgSaga from './controllers/getOrganizationsSaga';
import CreateNewsStorySaga from '../containers/CreateNewsStory/sagas';

export function* OrganizationSaga() {
  yield all([
    takeLatest(OrganizationConstants.DEFAULT_ACTION, defaultSaga),
    takeLatest(OrganizationConstants.REGISTER_ORG, registerOrgSaga),
    takeLatest(OrganizationConstants.GET_ORG, getOrgSaga),
    fork(CreateNewsStorySaga)
  ]);
}

export default OrganizationSaga;
