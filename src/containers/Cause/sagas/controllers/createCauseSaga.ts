import { all, put, call, select } from 'redux-saga/effects';
import { getOrgAction } from 'containers/Organization/actions';
import api from 'utilities/api';
import { getFormValues, startSubmit, stopSubmit } from 'redux-form';
import { getNewsFeedAction } from 'containers/NewsFeed/actions';
import { getDonationsAction } from 'containers/Donations/actions';
import { CREATE_CAUSE_FORM_NAME } from 'containers/Cause/containers/CreateCause/Form';
import { makeSelectActiveOrganization } from 'containers/Organization/selectors';
import {
  createCauseSuccessAction,
  createCauseFailAction,
  getCauseAction
} from 'containers/Cause/actions';

function* createCauseSaga() {
  try {
    yield put(startSubmit(CREATE_CAUSE_FORM_NAME));
    const formData = yield select(getFormValues(CREATE_CAUSE_FORM_NAME));
    const activeOrganization = yield select(makeSelectActiveOrganization());
    const organizationUuid = activeOrganization.uuid;
    const causeData = {
      ...formData,
      organizationUuid
    };
    const { data } = yield call(api, 'post', '/v1/cause', causeData);
    yield all([
      put(createCauseSuccessAction(data)),
      put(getNewsFeedAction()),
      put(getDonationsAction()),
      put(getCauseAction()),
      put(getOrgAction())
    ]);
  } catch (err) {
    yield put(createCauseFailAction(err));
  } finally {
    yield put(stopSubmit(CREATE_CAUSE_FORM_NAME));
  }
}

export default createCauseSaga;
