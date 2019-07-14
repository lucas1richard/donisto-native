import { put, call } from 'redux-saga/effects';
import { rejectFollowOrg } from 'containers/Organization/actions';
import api from 'utilities/api';
import { IOrganizationActions } from 'containers/Organization/types/actions';

function* rejectFollowOrganizationSaga(action: IOrganizationActions.RejectFollowOrg['WithUuid']) {
  try {
    const data = yield call(api, 'post', '/v1/organization/unfollow', { org_uuid: action.org_uuid });
    yield put(rejectFollowOrg.Success(data));
  } catch (err) {
    yield put(rejectFollowOrg.Fail(err));

  }
}

export default rejectFollowOrganizationSaga;