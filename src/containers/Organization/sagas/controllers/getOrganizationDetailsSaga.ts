import { put, call, select } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  getOrgDetailActionSuccess,
  getOrgDetailFailAction
} from 'containers/Organization/actions';
import { makeSelectDetailOrganization } from 'containers/Organization/selectors';

function* getOrgDetailsSaga() {
  try {
    const org = yield select(makeSelectDetailOrganization());
    const organization_uuid = org.uuid;
    const { data } = yield call(api, 'post', '/v1/organization/detail', { organization_uuid });
    yield put(getOrgDetailActionSuccess(data));
  } catch (err) {
    yield put(getOrgDetailFailAction(err));
  }
}

export default getOrgDetailsSaga;
