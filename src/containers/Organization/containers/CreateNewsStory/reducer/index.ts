import CreateNewsStoryConstants from '../constants';
import { TCreateNewsStoryActions } from '../actions';

export type TCreateStoryStatus = 'editing'|'submitting'|'success'|'fail';

export interface ICreateStoryReduxState {
  ui: {
    loaded: boolean;
    status: TCreateStoryStatus;
  };
}

const initialState: ICreateStoryReduxState = {
  ui: {
    loaded: true,
    status: 'editing'
  }
};

function createNewsStoryReducer(state = initialState, action: TCreateNewsStoryActions): ICreateStoryReduxState {
  switch (action.type) {
    case CreateNewsStoryConstants.SUBMIT_STORY:
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: false,
          status: 'submitting'
        }
      };
    case CreateNewsStoryConstants.SUBMIT_STORY_SUCCESS:
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: true,
          status: 'success'
        }
      };
    case CreateNewsStoryConstants.SUBMIT_STORY_FAIL:
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: true,
          status: 'fail'
        }
      };
    case CreateNewsStoryConstants.SET_STORY_STATUS:
      return {
        ...state,
        ui: {
          ...state.ui,
          status: action.status
        }
      };
    default:
      return state;
  }
}

export default createNewsStoryReducer;
