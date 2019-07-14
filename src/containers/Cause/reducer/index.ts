import CauseConstants from '../constants';
import { TCauseActions } from '../types/actions';
import selectForNewsFeedTransformer from './transformers/selectForNewsFeed';

export interface ICauseInitialState {
  causes: { [x: string]: ICause };
  contactCauses: string[];
  getCausesError: string;
  createCauseError: string;
  selectedForNewsFeed: { [x: string]: boolean };
  ui: {
    getCausesLoaded: boolean;
    createCauseLoaded: boolean;
    createCauseOrg: string;
  };
}

const causeInitialState: ICauseInitialState = {
  causes: {},
  contactCauses: [],
  selectedForNewsFeed: {},
  getCausesError: undefined,
  createCauseError: undefined,
  ui: {
    getCausesLoaded: false,
    createCauseLoaded: false,
    createCauseOrg: ''
  }
};

function causeReducer(state = causeInitialState, action: TCauseActions) {
  switch (action.type) {
    case CauseConstants.CREATE_CAUSE_ACTION:
      return state;

    case CauseConstants.GET_CAUSE_ACTION:
      return {
        ...state,
        ui: {
          ...state.ui,
          getCausesLoaded: false
        }
      };

    case CauseConstants.GET_CAUSE_SUCCESS_ACTION:
      return {
        ...state,
        causes: action.data.reduce((memo: any, item: any) => {
          memo[item.uuid] = item;
          return memo;
        }, {}),
        ui: {
          ...state.ui,
          getCausesLoaded: true
        }
      };

    case CauseConstants.GET_CONTACT_CAUSES_SUCCESS_ACTION:
      return {
        ...state,
        causes: {
          ...state.causes,
          ...action.data.reduce((memo: any, item: any) => {
            memo[item.uuid] = item;
            return memo;
          }, {}),
        },
        contactCauses: action.data.map((cause) => cause.uuid),
        ui: {
          ...state.ui,
          getCausesLoaded: true
        }
      };

    case CauseConstants.GET_CAUSE_DETAIL_SUCCESS_ACTION:
      return {
        ...state,
        causes: {
          ...state.causes,
          ...action.data.reduce((memo: any, item: any) => {
            memo[item.uuid] = item;
            return memo;
          }, {})
        },
        ui: {
          ...state.ui,
          getCausesLoaded: true
        }
      };

    case CauseConstants.GET_CAUSE_FAIL_ACTION:
      return {
        ...state,
        getCausesError: action.error,
        ui: {
          ...state.ui,
          getCausesLoaded: true
        }
      };

    case CauseConstants.TOGGLE_NEWSFEED_SELECT:
      return selectForNewsFeedTransformer(state, action);

    case CauseConstants.SELECT_ORG_CREATE_CAUSE_ACTION:
      return {
        ...state,
        ui: {
          ...state.ui,
          createCauseOrg: action.uuid
        }
      };

    default:
      return state;
  }
}

export default causeReducer;
