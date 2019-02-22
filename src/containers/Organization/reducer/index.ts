import OrganizationConstants from '../constants';
import { TOrganizationActions } from '../actions';

const initialState = {};

function organizationReducer(state = initialState, action: TOrganizationActions) {
  switch (action.type) {
    case OrganizationConstants.DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default organizationReducer;
