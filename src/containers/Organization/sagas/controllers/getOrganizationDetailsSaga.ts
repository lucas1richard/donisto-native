import { put, call, select } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  getOrgDetailActionSuccess,
  getOrgDetailFailAction
} from 'containers/Organization/actions';
import { makeSelectDetailOrganization } from 'containers/Organization/selectors';
import { getCauseDetailAction } from 'containers/Cause/actions';

function* getOrgDetailsSaga() {
  try {
    const org = yield select(makeSelectDetailOrganization());
    const organization_uuid = org.uuid;
    const { data }: { data: IOrganizationDetail } = yield call(api, 'post', '/v1/organization/detail', { organization_uuid });
    yield put(getOrgDetailActionSuccess(data));
    yield put(getCauseDetailAction(data.causes.map(cause => cause.uuid)));
  } catch (err) {
    yield put(getOrgDetailFailAction(err));
  }
}

export default getOrgDetailsSaga;
