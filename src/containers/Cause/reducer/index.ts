import CauseConstants from '../constants';
import { TCauseActions } from '../actions';
import selectForNewsFeedTransformer from './transformers/selectForNewsFeed';

export interface ICauseInitialState {
  causes: any,
  getCausesError: string,
  createCauseError: string,
  selectedForNewsFeed: any
  ui: {
    getCausesLoaded: boolean,
    createCauseLoaded: boolean
  }
}

const causeInitialState: ICauseInitialState = {
  causes: {},
  selectedForNewsFeed: {},
  getCausesError: undefined,
  createCauseError: undefined,
  ui: {
    getCausesLoaded: false,
    createCauseLoaded: false
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
        causes: action.cause.reduce((memo: any, item: any) => {
          memo[item.uuid] = item;
          return memo;
        }, {}),
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

    default:
      return state;
  }
}

export default causeReducer;