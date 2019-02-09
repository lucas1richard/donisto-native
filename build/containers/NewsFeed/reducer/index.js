import NewsFeedConstants from "../constants";
export const newsfeedInitialState = {
    news: [],
    error: undefined,
    ui: {
        loaded: false
    }
};
const newsfeedReducer = (state = newsfeedInitialState, action) => {
    switch (action.type) {
        case NewsFeedConstants.GET_NEWS_FEED:
            return Object.assign({}, state, { ui: Object.assign({}, state.ui, { loaded: false }) });
        case NewsFeedConstants.GET_NEWS_FEED_SUCCESS:
            return Object.assign({}, state, { news: action.newsfeed, error: undefined, ui: Object.assign({}, state.ui, { loaded: true }) });
        case NewsFeedConstants.GET_NEWS_FEED_FAIL:
            return Object.assign({}, state, { error: action.error, ui: Object.assign({}, state.ui, { loaded: true }) });
        default:
            return state;
    }
};
export default newsfeedReducer;
//# sourceMappingURL=index.js.map