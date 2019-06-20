import { put, call } from 'redux-saga/effects';
import {
  IRejectFollowOrgAction,
  rejectFollowOrgSuccessAction,
  rejectFollowOrgFailAction
} from 'containers/Organization/actions';
import api from 'utilities/api';

function* rejectFollowOrganizationSaga(action: IRejectFollowOrgAction) {
  try {
    const data = yield call(api, 'post', '/v1/organization/unfollow', { org_uuid: action.org_uuid });
    yield put(rejectFollowOrgSuccessAction(data));
  } catch (err) {
    yield put(rejectFollowOrgFailAction(err));

  }
}

export default rejectFollowOrganizationSaga;