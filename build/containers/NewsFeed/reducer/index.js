import NewsFeedConstants from '../constants';
import toggleSelectCauseTransformer from './transformers/toggleSelectCause';
import updateDetailIxTransformer from './transformers/updateDetailIx';
import getNewsFeedFailTransformer from './transformers/getNewsFeedFail';
import getNewsFeedSuccessTransformer from './transformers/getNewsFeedSuccess';
import getNewsFeedTransformer from './transformers/getNewsFeed';
import getNewsItemDetailSuccessTransformer from './transformers/getNewsItemDetailSuccess';
export const newsfeedInitialState = {
    news: [],
    selectedCauses: {},
    error: undefined,
    uuid: {},
    ui: {
        loaded: false,
        detailIx: 0
    }
};
const newsfeedReducer = (state = newsfeedInitialState, action) => {
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
        case NewsFeedConstants.GET_NEWS_ITEM_DETAIL_SUCCESS:
            return getNewsItemDetailSuccessTransformer(state, action);
        default:
            return state;
    }
};
export default newsfeedReducer;
//# sourceMappingURL=index.js.map