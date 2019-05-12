import { all, takeLatest } from 'redux-saga/effects';
import ContactConstants from '../constants';
import updateContactSaga from './controllers/updateContactSaga';
import getOrgNewsFeedSaga from './controllers/getOrgNewsFeedSaga';
import getContactSaga from 'containers/Login/sagas/controllers/getContact';

function* contactSagas() {
  yield all([
    takeLatest(ContactConstants.UPDATE_CONTACT, updateContactSaga),
    takeLatest(ContactConstants.GET_ORG_NEWS_FEED, getOrgNewsFeedSaga),
    takeLatest(ContactConstants.GET_CONTACT, getContactSaga),
  ]);
}

export default contactSagas;
