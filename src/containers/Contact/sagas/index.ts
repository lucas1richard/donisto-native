import { all, takeLatest } from 'redux-saga/effects';
import ContactConstants from '../constants';
import updateContactSaga from './controllers/updateContactSaga';
import getOrgNewsFeedSaga from './controllers/getOrgNewsFeedSaga';

function* contactSagas() {
  yield all([
    takeLatest(ContactConstants.UPDATE_CONTACT, updateContactSaga),
    takeLatest(ContactConstants.GET_ORG_NEWS_FEED, getOrgNewsFeedSaga)
  ]);
}

export default contactSagas;
