import { all, put } from 'redux-saga/effects';
import { getNewsFeedAction } from 'containers/NewsFeed/actions';
import { getDonationsAction } from 'containers/Donations/actions';
import { getOrgAction } from 'containers/Organization/actions';
import { getOrgNewsFeedAction } from 'containers/Contact/actions';
import { getContactCausesAction } from 'containers/Cause/actions';

function* getInitialData() {
  yield all([
    put(getNewsFeedAction()),
    put(getDonationsAction()),
    put(getOrgAction()),
    put(getOrgNewsFeedAction()),
    put(getContactCausesAction())
  ]);
}

export default getInitialData;