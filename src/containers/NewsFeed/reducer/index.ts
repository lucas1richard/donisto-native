import { TNewsFeedActions } from "../actions";
import NewsFeedConstants from "../constants";

export interface INewsFeedReduxUI {
  loaded: boolean
}

export interface INewsfeedInitialState {
  news: any[],
  error: string,
  ui: INewsFeedReduxUI
}

export const newsfeedInitialState: INewsfeedInitialState = {
  news: [],
  error: undefined,
  ui: {
    loaded: false
  }
};

const newsfeedReducer = (state = newsfeedInitialState, action: TNewsFeedActions) => {
  switch (action.type) {
    case NewsFeedConstants.GET_NEWS_FEED:
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: false
        }
      };
    case NewsFeedConstants.GET_NEWS_FEED_SUCCESS:
      return {
        ...state,
        news: action.newsfeed,
        error: undefined,
        ui: {
          ...state.ui,
          loaded: true
        }
      };
    case NewsFeedConstants.GET_NEWS_FEED_FAIL:
      return {
        ...state,
        error: action.error,
        ui: {
          ...state.ui,
          loaded: true
        }
      };
    default:
      return state;
  }
};

export default newsfeedReducer;
