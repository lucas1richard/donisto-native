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
import getDiscoverOrgsSaga from './controllers/getDiscoverOrgsSaga';
import rejectFollowOrganizationSaga from './controllers/rejectFollowOrganizationSaga';
import followOrganizationSaga from './controllers/followOrganizationSaga';

export function* OrganizationSaga() {
  yield all([
    takeLatest(OrganizationConstants.DEFAULT_ACTION, defaultSaga),
    takeLatest(OrganizationConstants.REGISTER_ORG, registerOrgSaga),
    takeLatest(OrganizationConstants.GET_ORG, getOrgSaga),
    takeLatest(OrganizationConstants.GET_ORG_DETAIL, getOrgDetailsSaga),
    takeLatest(OrganizationConstants.UPDATE_ORG, updateOrgSaga),
    takeLatest(OrganizationConstants.CREATE_ORG_LINKS, createOrgLinksSaga),
    takeLatest(OrganizationConstants.DELETE_ORG_LINKS, deleteOrgLinksSaga),
    takeLatest(OrganizationConstants.GET_DISCOVER_ORGS, getDiscoverOrgsSaga),
    takeLatest(OrganizationConstants.FOLLOW_ORGANIZATION, followOrganizationSaga),
    takeLatest(OrganizationConstants.REJECT_FOLLOW_ORGANIZATION, rejectFollowOrganizationSaga),
    fork(CreateNewsStorySaga)
  ]);
}

export default OrganizationSaga;
