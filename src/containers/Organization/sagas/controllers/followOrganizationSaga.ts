import { put, call } from 'redux-saga/effects';
import api from 'utilities/api';
import { IOrganizationActions } from 'containers/Organization/types/actions';
import { followOrgAction } from 'containers/Organization/actions';

function* followOrganizationSaga(action: IOrganizationActions.FollowOrg['WithUuid']) {
  try {
    const data = yield call(api, 'post', '/v1/organization/follow', { org_uuid: action.org_uuid });
    yield put(followOrgAction.Success(data));
  } catch (err) {
    yield put(followOrgAction.Fail(err));

  }
}

export default followOrganizationSaga;