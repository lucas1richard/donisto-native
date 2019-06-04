import { all, put, call, select } from 'redux-saga/effects';
import { getOrgAction } from 'containers/Organization/actions';
import api from 'utilities/api';
import { getFormValues, startSubmit, stopSubmit, reset } from 'redux-form';
import { getNewsFeedAction } from 'containers/NewsFeed/actions';
import { getDonationsAction } from 'containers/Donations/actions';
import { CREATE_CAUSE_FORM_NAME } from 'containers/Cause/containers/CreateCause/Form';
import {
  createCauseSuccessAction,
  createCauseFailAction,
  getCauseAction,
  selectOrgCreateCauseAction
} from 'containers/Cause/actions';
import { makeSelectCreateCauseOrg } from 'containers/Cause/selectors';

function* createCauseSaga() {
  try {
    yield put(startSubmit(CREATE_CAUSE_FORM_NAME));
    const formData = yield select(getFormValues(CREATE_CAUSE_FORM_NAME));
    const selectedOrganization = yield select(makeSelectCreateCauseOrg());
    if (!selectedOrganization) {
      throw new Error('You must select an organization');
    }
    const organizationUuid = selectedOrganization;
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

    yield put(selectOrgCreateCauseAction(''));
    yield put(reset(CREATE_CAUSE_FORM_NAME));
  } catch (err) {
    yield put(createCauseFailAction(err.message));
  } finally {
    yield put(stopSubmit(CREATE_CAUSE_FORM_NAME));
  }
}

export default createCauseSaga;
