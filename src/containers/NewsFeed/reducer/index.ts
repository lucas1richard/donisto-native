import { TNewsFeedActions } from '../actions';
import NewsFeedConstants from '../constants';
import toggleSelectCauseTransformer from './transformers/toggleSelectCause';
import updateDetailIxTransformer from './transformers/updateDetailIx';
import getNewsFeedFailTransformer from './transformers/getNewsFeedFail';
import getNewsFeedSuccessTransformer from './transformers/getNewsFeedSuccess';
import getNewsFeedTransformer from './transformers/getNewsFeed';
import getNewsItemDetailSuccessTransformer from './transformers/getNewsItemDetailSuccess';
import selectOrgUuidTransformer from './transformers/selectOrgUuid';

export interface INewsFeedReduxUI {
  loaded: boolean;
  detailIx: string;
}

export interface INewsfeedInitialState {
  news: any[];
  error: string;
  uuid: any;
  selectedOrgUuid: string;
  selectedCauses: {
    [x: string]: boolean
  };
  ui: INewsFeedReduxUI;
}

export const newsfeedInitialState: INewsfeedInitialState = {
  news: [],
  selectedCauses: {},
  selectedOrgUuid: '',
  error: undefined,
  uuid: {},
  ui: {
    loaded: false,
    detailIx: ''
  }
};

const newsfeedReducer = (state = newsfeedInitialState, action: TNewsFeedActions) => {
  switch (action.type) {
    case NewsFeedConstants.GET_NEWS_FEED:
      return getNewsFeedTransformer(state);

    case NewsFeedConstants.GET_NEWS_FEED_SUCCESS:
      return getNewsFeedSuccessTransformer(state, action);

    case NewsFeedConstants.SELECT_ORG_UUID:
      return selectOrgUuidTransformer(state, action);

    case NewsFeedConstants.GET_NEWS_FEED_FAIL:
      return getNewsFeedFailTransformer(state, action);

    case NewsFeedConstants.UPDATE_DETAIL_IX:
      return updateDetailIxTransformer(state, action);

    case NewsFeedConstants.TOGGLE_SELECT_CAUSE:
      return toggleSelectCauseTransformer(state, action);

    case NewsFeedConstants.GET_NEWS_ITEM_DETAIL_SUCCESS:
      return getNewsItemDetailSuccessTransformer(state, action);

    default:
      return state;
  }
};

export default newsfeedReducer;
