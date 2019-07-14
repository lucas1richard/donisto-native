import ContactConstants from '../constants';
import { TContactActions } from '../actions';

export const initialContactState = {};

const contactReducer = (
  state = initialContactState,
  action: TContactActions
) => {

  switch (action.type) {

    case ContactConstants.GET_CONTACT_SUCCESS:
      return {
        ...state,
        ...action.data
      };

    case ContactConstants.GET_CONTACT_FAIL:
      return {
        ...state,
        error: action.error
      };

      case ContactConstants.UPDATE_CONTACT_SUCCESS:
        return {
          ...state,
          ...action.data
        };

      case ContactConstants.UPDATE_CONTACT_FAIL:
        return {
          ...state,
          error: action.error
        };

      case ContactConstants.GET_ORG_NEWS_FEED:
        return state;

      case ContactConstants.GET_ORG_NEWS_FEED_SUCCESS:
        return {
          ...state,
          orgNewsFeed: action.data
        };

      case ContactConstants.GET_ORG_NEWS_FEED_FAIL:
        return {
          ...state,
          error: action.error
        };

    default:
      return state;
  }

};

export default contactReducer;
