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
//# sourceMappingURL=actions.js.map