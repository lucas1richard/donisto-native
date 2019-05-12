import { put, call, select } from 'redux-saga/effects';
import { createOrgLinksFailAction, updateOrgActionSuccess } from 'containers/Organization/actions';
import api from 'utilities/api';
import { makeSelectDetailOrganization } from 'containers/Organization/selectors';
import { getFormValues, reset } from 'redux-form';
import { ORG_LINK_FORM } from 'containers/Organization/containers/LandingPage/components/LinkForm';

function* createOrgLinksSaga() {
  try {
    const organization = yield select(makeSelectDetailOrganization());
    const formValues = yield select(getFormValues(ORG_LINK_FORM));
    const { data } = yield call(api, 'post', '/v1/organization/links', {
      organization_uuid: organization.uuid,
      links: [formValues]
    });
    yield put(updateOrgActionSuccess(data));
    yield put(reset(ORG_LINK_FORM));
  } catch (err) {
    yield put(createOrgLinksFailAction(err));
  }
}

export default createOrgLinksSaga;