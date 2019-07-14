import api from 'utilities/api';
import { all, put, call, select } from 'redux-saga/effects';
import { registerOrgAction, getOrgAction } from 'containers/Organization/actions';
import { getFormValues, startSubmit, stopSubmit } from 'redux-form';
import { RegisterNewOrgForm_FORM_NAME } from 'containers/Organization/containers/RegisterNewOrganization/components/RegisterNewOrgForm';
import { getNewsFeedAction } from 'containers/NewsFeed/actions';
import { getDonationsAction } from 'containers/Donations/actions';
import { getContactAction } from 'containers/Contact/actions';

function* registerOrgSaga() {
  try {
    yield put(startSubmit(RegisterNewOrgForm_FORM_NAME));
    const formData = yield select(getFormValues(RegisterNewOrgForm_FORM_NAME));
    const { data } = yield call(api, 'post', '/v1/organization', formData);
    yield all([
      put(registerOrgAction.Success(data)),
      put(getNewsFeedAction.Default()),
      put(getDonationsAction.Default()),
      put(getOrgAction.Default()),
      put(getContactAction.Default()),
    ]);
  } catch (err) {
    yield put(registerOrgAction.Fail(err));
  } finally {
    yield put(stopSubmit(RegisterNewOrgForm_FORM_NAME));
  }
}

export default registerOrgSaga;
