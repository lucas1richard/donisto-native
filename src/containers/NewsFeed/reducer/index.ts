import { TNewsFeedActions } from '../actions';
import NewsFeedConstants from '../constants';
import toggleSelectCauseTransformer from './transformers/toggleSelectCause';
import updateDetailIxTransformer from './transformers/updateDetailIx';
import getNewsFeedFailTransformer from './transformers/getNewsFeedFail';
import getNewsFeedSuccessTransformer from './transformers/getNewsFeedSuccess';
import getNewsFeedTransformer from './transformers/getNewsFeed';

export interface INewsFeedReduxUI {
  loaded: boolean;
  detailIx: number;
}

export interface INewsfeedInitialState {
  news: any[];
  error: string;
  selectedCauses: {
    [x: string]: boolean
  };
  ui: INewsFeedReduxUI;
}

export const newsfeedInitialState: INewsfeedInitialState = {
  news: [],
  selectedCauses: {},
  error: undefined,
  ui: {
    loaded: false,
    detailIx: 0
  }
};

const newsfeedReducer = (state = newsfeedInitialState, action: TNewsFeedActions) => {
  switch (action.type) {
    case NewsFeedConstants.GET_NEWS_FEED:
      return getNewsFeedTransformer(state, action);

    case NewsFeedConstants.GET_NEWS_FEED_SUCCESS:
      return getNewsFeedSuccessTransformer(state, action);

    case NewsFeedConstants.GET_NEWS_FEED_FAIL:
      return getNewsFeedFailTransformer(state, action);

    case NewsFeedConstants.UPDATE_DETAIL_IX:
      return updateDetailIxTransformer(state, action);

    case NewsFeedConstants.TOGGLE_SELECT_CAUSE:
      return toggleSelectCauseTransformer(state, action);

    default:
      return state;
  }
};

export default newsfeedReducer;
