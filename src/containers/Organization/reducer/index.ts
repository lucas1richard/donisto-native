import OrganizationConstants from '../constants';
import { TOrganizationActions } from '../actions';
import getOrgSuccessCaseFn from './caseFn/getOrgSuccess';
import selectOrgDetailCaseFn from './caseFn/selectOrgDetail';
import getOrgDetailSuccessCaseFn from './caseFn/getOrgDetailSuccess';
import updateOrgSuccessCaseFn from './caseFn/updateOrgSuccess';
import registerOrgFailCaseFn from './caseFn/registerOrgFail';
import registerOrgCaseFn from './caseFn/registerOrg';
import selectOrgCauseDetailCaseFn from './caseFn/selectOrgCauseDetail';
import getDiscoverOrgsSuccessCaseFn from './caseFn/getDiscoverOrgsSuccess';
import getDiscoverOrgsCaseFn from './caseFn/getDiscoverOrgs';
import getDiscoverOrgsFailCaseFn from './caseFn/getDiscoverOrgsFail';

export interface IOrganizationUI {
  loaded: boolean;
  detailUuid: string;
  detailCauseUuid: string;
  discoverOrgsLoaded: boolean;
}

export interface IOrganizationInitialState {
  ix: number,
  organizations: IOrganization[];
  discoverOrgs: string[];
  ui: IOrganizationUI;
  error: string;
  uuid: {
    [uuid: string]: IOrganization
  };
}

export const initialState: IOrganizationInitialState = {
  ix: 0,
  organizations: [],
  discoverOrgs: [],
  uuid: {},
  error: undefined,
  ui: {
    loaded: true,
    discoverOrgsLoaded: true,
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

    case OrganizationConstants.GET_DISCOVER_ORGS:
      return getDiscoverOrgsCaseFn(state);

    case OrganizationConstants.GET_DISCOVER_ORGS_SUCCESS:
      return getDiscoverOrgsSuccessCaseFn(state, action);

    case OrganizationConstants.GET_DISCOVER_ORGS_FAIL:
      return getDiscoverOrgsFailCaseFn(state);

    default:
      return state;
  }
}

export default organizationReducer;
