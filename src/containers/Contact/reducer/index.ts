import ContactConstants from "../constants";
import { ContactActions } from "../actions";

const initialContactState = {};

const contactReducer = (state = initialContactState, action: ContactActions) => {
  switch (action.type) {
    case ContactConstants.GET_CONTACT_SUCCESS:
      return action.contact;
    case ContactConstants.GET_CONTACT_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default contactReducer;
