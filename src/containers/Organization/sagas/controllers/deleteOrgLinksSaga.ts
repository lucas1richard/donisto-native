import { put, call } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  updateOrgAction,
  createOrgLinksAction,
} from 'containers/Organization/actions';
import { IOrganizationActions } from 'containers/Organization/types/actions';

function* deleteOrgLinksSaga(action: IOrganizationActions.DeleteOrgLinks['WithLinks']) {
  try {
    const { links, orgUuid } = action;
    const { data } = yield call(api, 'delete', '/v1/organization/links', {
      organization_uuid: orgUuid,
      link_uuids: links
    });
    yield put(updateOrgAction.Success(data));
  } catch (err) {
    yield put(createOrgLinksAction.Fail(err));
  }
}

export default deleteOrgLinksSaga;