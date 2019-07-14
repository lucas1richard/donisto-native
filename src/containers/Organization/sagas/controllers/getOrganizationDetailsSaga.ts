import { put, call, select } from 'redux-saga/effects';
import api from 'utilities/api';
import { getOrgDetailAction } from 'containers/Organization/actions';
import { makeSelectDetailOrganization } from 'containers/Organization/selectors';
import { getCauseDetailAction } from 'containers/Cause/actions';

function* getOrgDetailsSaga() {
  try {
    const org = yield select(makeSelectDetailOrganization());
    const organization_uuid = org.uuid;
    const { data }: { data: IOrganization.Basic } = yield call(api, 'post', '/v1/organization/detail', { organization_uuid });
    yield put(getOrgDetailAction.Success(data));
    yield put(getCauseDetailAction.WithUuids(data.causes.map(cause => cause.uuid)));
  } catch (err) {
    yield put(getOrgDetailAction.Fail(err));
  }
}

export default getOrgDetailsSaga;
