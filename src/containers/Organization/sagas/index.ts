import { takeLatest, all, fork } from 'redux-saga/effects';
import OrganizationConstants from '../constants';
import defaultSaga from './controllers/defaultSaga';
import registerOrgSaga from './controllers/registerOrganizationSaga';
import getOrgSaga from './controllers/getOrganizationsSaga';
import CreateNewsStorySaga from '../containers/CreateNewsStory/sagas';
import getOrgDetailsSaga from './controllers/getOrganizationDetailsSaga';
import updateOrgSaga from './controllers/updateOrganizationSaga';
import createOrgLinksSaga from './controllers/createOrgLinksSaga';
import deleteOrgLinksSaga from './controllers/deleteOrgLinksSaga';

export function* OrganizationSaga() {
  yield all([
    takeLatest(OrganizationConstants.DEFAULT_ACTION, defaultSaga),
    takeLatest(OrganizationConstants.REGISTER_ORG, registerOrgSaga),
    takeLatest(OrganizationConstants.GET_ORG, getOrgSaga),
    takeLatest(OrganizationConstants.GET_ORG_DETAIL, getOrgDetailsSaga),
    takeLatest(OrganizationConstants.UPDATE_ORG, updateOrgSaga),
    takeLatest(OrganizationConstants.CREATE_ORG_LINKS, createOrgLinksSaga),
    takeLatest(OrganizationConstants.DELETE_ORG_LINKS, deleteOrgLinksSaga),
    fork(CreateNewsStorySaga)
  ]);
}

export default OrganizationSaga;
