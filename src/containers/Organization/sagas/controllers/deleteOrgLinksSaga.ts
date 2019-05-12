import { put, call } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  createOrgLinksFailAction,
  updateOrgActionSuccess,
  IDeleteOrgLinksAction
} from 'containers/Organization/actions';

function* deleteOrgLinksSaga(action: IDeleteOrgLinksAction) {
  try {
    const { links, orgUuid } = action;
    const { data } = yield call(api, 'delete', '/v1/organization/links', {
      organization_uuid: orgUuid,
      link_uuids: links
    });
    yield put(updateOrgActionSuccess(data));
  } catch (err) {
    yield put(createOrgLinksFailAction(err));
  }
}

export default deleteOrgLinksSaga;