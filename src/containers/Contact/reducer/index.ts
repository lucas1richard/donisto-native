import ContactConstants from "../constants";
import { TContactActions } from "../actions";

export const initialContactState = {};

const contactReducer = (state = initialContactState, action: TContactActions) => {

  switch (action.type) {

    case ContactConstants.GET_CONTACT_SUCCESS:
      return action.contact;

    case ContactConstants.GET_CONTACT_FAIL:
      return {
        ...state,
        error: action.error
      };

      case ContactConstants.UPDATE_CONTACT_SUCCESS:
        return action.contact;

      case ContactConstants.UPDATE_CONTACT_FAIL:
        return {
          ...state,
          error: action.error
        };

    default:
      return state;
  }

};

export default contactReducer;
