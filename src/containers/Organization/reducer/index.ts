import OrganizationConstants from '../constants';
import { TOrganizationActions } from '../actions';
import getOrgSuccessCaseFn from './caseFn/getOrgSuccess';
import selectOrgDetailCaseFn from './caseFn/selectOrgDetail';
import getOrgDetailSuccessCaseFn from './caseFn/getOrgDetailSuccess';
import updateOrgSuccessCaseFn from './caseFn/updateOrgSuccess';
import registerOrgFailCaseFn from './caseFn/registerOrgFail';
import registerOrgCaseFn from './caseFn/registerOrg';
import selectOrgCauseDetailCaseFn from './caseFn/selectOrgCauseDetail';

export interface IOrganizationUI {
  loaded: boolean;
  detailUuid: string;
  detailCauseUuid: string;
}

export interface IOrganizationInitialState {
  ix: number,
  organizations: IOrganization[];
  ui: IOrganizationUI;
  error: string;
  uuid: {
    [uuid: string]: IOrganization
  };
}

export const initialState: IOrganizationInitialState = {
  ix: 0,
  organizations: [],
  uuid: {},
  error: undefined,
  ui: {
    loaded: true,
    detailUuid: '',
    detailCauseUuid: ''
  }
};

function organizationReducer(state = initialState, action: TOrganizationActions) {
  switch (action.type) {
    case OrganizationConstants.REGISTER_ORG:
      return registerOrgCaseFn(state);

    case OrganizationConstants.GET_ORG_SUCCESS:
      return getOrgSuccessCaseFn(state, action);

    case OrganizationConstants.GET_ORG_SUCCESS:
      return getOrgSuccessCaseFn(state, action);

    case OrganizationConstants.REGISTER_ORG_FAIL:
      return registerOrgFailCaseFn(state, action);

    case OrganizationConstants.SELECT_DETAIL:
      return selectOrgDetailCaseFn(state, action);

    case OrganizationConstants.SELECT_DETAIL_CAUSE:
      return selectOrgCauseDetailCaseFn(state, action);

    case OrganizationConstants.GET_ORG_DETAIL_SUCCESS:
      return getOrgDetailSuccessCaseFn(state, action);

    case OrganizationConstants.UPDATE_ORG_SUCCESS:
      return updateOrgSuccessCaseFn(state, action);

    default:
      return state;
  }
}

export default organizationReducer;
