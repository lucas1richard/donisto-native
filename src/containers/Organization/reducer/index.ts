import OrganizationConstants from '../constants';
import { TOrganizationActions } from '../actions';

interface IOrganizationUI {
  loaded: boolean;
}

export interface IOrganizationInitialState {
  ix: number,
  organizations: any;
  ui: IOrganizationUI;
  error: any;
}

const initialState: IOrganizationInitialState = {
  ix: 0,
  organizations: [],
  error: undefined,
  ui: {
    loaded: true
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
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: true
        },
        organizations: action.organization
      };
    case OrganizationConstants.REGISTER_ORG_FAIL:
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: true
        },
        error: action.error
      };
    default:
      return state;
  }
}

export default organizationReducer;
