import OrganizationConstants from '../constants';
import { TOrganizationActions } from '../actions';
import getOrgSuccessCaseFn from './caseFn/getOrgSuccess';
import selectOrgDetailCaseFn from './caseFn/selectOrgDetail';
import getOrgDetailSuccessCaseFn from './caseFn/getOrgDetailSuccess';
import updateOrgSuccessCaseFn from './caseFn/updateOrgSuccess';

interface IOrganizationUI {
  loaded: boolean;
  detailUuid: string;
}

export interface IOrganizationInitialState {
  ix: number,
  organizations: IOrganization[];
  ui: IOrganizationUI;
  error: any;
  uuid: { [uuid: string]: IOrganization };
}

const initialState: IOrganizationInitialState = {
  ix: 0,
  organizations: [],
  uuid: {},
  error: undefined,
  ui: {
    loaded: true,
    detailUuid: '',
  }
};

function organizationReducer(state = initialState, action: TOrganizationActions) {
  switch (action.type) {
    case OrganizationConstants.REGISTER_ORG:
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: false
        }
      };

    case OrganizationConstants.GET_ORG_SUCCESS:
      return getOrgSuccessCaseFn(state, action);

    case OrganizationConstants.GET_ORG_SUCCESS:
      return getOrgSuccessCaseFn(state, action);

    case OrganizationConstants.REGISTER_ORG_FAIL:
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: true
        },
        error: action.error
      };

    case OrganizationConstants.SELECT_DETAIL:
      return selectOrgDetailCaseFn(state, action);

    case OrganizationConstants.GET_ORG_DETAIL_SUCCESS:
      return getOrgDetailSuccessCaseFn(state, action);

    case OrganizationConstants.UPDATE_ORG_SUCCESS:
      return updateOrgSuccessCaseFn(state, action);

    default:
      return state;
  }
}

export default organizationReducer;
