import { put, call } from 'redux-saga/effects';
import {
  IFollowOrgAction,
  followOrgSuccessAction,
  followOrgFailAction
} from 'containers/Organization/actions';
import api from 'utilities/api';

function* followOrganizationSaga(action: IFollowOrgAction) {
  try {
    const data = yield call(api, 'post', '/v1/organization/follow', { org_uuid: action.org_uuid });
    yield put(followOrgSuccessAction(data));
  } catch (err) {
    yield put(followOrgFailAction(err));

  }
}

export default followOrganizationSaga;