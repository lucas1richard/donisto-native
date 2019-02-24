import { all, put, call, select } from 'redux-saga/effects';
import {
  registerOrgFailAction,
  registerOrgActionSuccess,
  getOrgAction
} from 'containers/Organization/actions';
import api from 'utilities/api';
import { getFormValues, startSubmit, stopSubmit } from 'redux-form';
import { RegisterNewOrgForm_FORM_NAME } from 'containers/Organization/containers/RegisterNewOrganization/components/RegisterNewOrgForm';
import { getNewsFeedAction } from 'containers/NewsFeed/actions';
import { getDonationsAction } from 'containers/Donations/actions';

function* registerOrgSaga() {
  try {
    yield put(startSubmit(RegisterNewOrgForm_FORM_NAME));
    const formData = yield select(getFormValues(RegisterNewOrgForm_FORM_NAME));
    const { data } = yield call(api, 'post', '/v1/organization', formData);
    yield all([
      put(registerOrgActionSuccess(data)),
      put(getNewsFeedAction()),
      put(getDonationsAction()),
      put(getOrgAction())
    ]);
  } catch (err) {
    yield put(registerOrgFailAction(err));
  } finally {
    yield put(stopSubmit(RegisterNewOrgForm_FORM_NAME));
  }
}

export default registerOrgSaga;
