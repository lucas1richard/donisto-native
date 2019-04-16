import NewsFeedConstants from "./constants";
export const getNewsFeedAction = () => ({
    type: NewsFeedConstants.GET_NEWS_FEED
});
export const getNewsFeedSuccessAction = (newsfeed) => ({
    type: NewsFeedConstants.GET_NEWS_FEED_SUCCESS,
    newsfeed
});
export const getNewsFeedFailAction = (error) => ({
    type: NewsFeedConstants.GET_NEWS_FEED_FAIL,
    error
});
////////////////////////////////////////////////////////////////////////////////
export const updateDetailIxAction = (detailIx) => ({
    type: NewsFeedConstants.UPDATE_DETAIL_IX,
    detailIx
});
////////////////////////////////////////////////////////////////////////////////
export const toggleSelectCauseAction = (uuid) => ({
    type: NewsFeedConstants.TOGGLE_SELECT_CAUSE,
    uuid
});
////////////////////////////////////////////////////////////////////////////////
export const getNewsItemAction = (news_item_uuid) => ({
    type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL,
    news_item_uuid
});
export const getNewsItemSuccessAction = (news_item) => ({
    type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL_SUCCESS,
    news_item
});
export const getNewsItemFailAction = (error) => ({
    type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL_FAIL,
    error
});
//# sourceMappingURL=actions.js.map