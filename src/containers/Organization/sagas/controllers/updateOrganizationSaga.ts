import { put, call, select } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  updateOrgActionSuccess,
  updateOrgFailAction,
  IUpdateOrgAction
} from 'containers/Organization/actions';
import { makeSelectDetailOrganization } from 'containers/Organization/selectors';
import { getFormValues, startSubmit, stopSubmit } from 'redux-form';
import { UPDATE_ORG_FORM } from 'containers/Organization/containers/LandingPage/components/UpdateForm';

function* updateOrgSaga(action: IUpdateOrgAction) {
  try {
    yield put(startSubmit(UPDATE_ORG_FORM));
    const org = yield select(makeSelectDetailOrganization());
    const formData = yield select(getFormValues(UPDATE_ORG_FORM));
    const updateData = {
      ...formData,
      uuid: org.uuid
    };
    const { data } = yield call(api, 'put', '/v1/organization', updateData);
    yield put(updateOrgActionSuccess(data));
    yield call(action.onComplete);
  } catch (err) {
    yield put(updateOrgFailAction(err));
  } finally {
    yield put(stopSubmit(UPDATE_ORG_FORM));
  }
}

export default updateOrgSaga;
