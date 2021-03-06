import NewsFeedConstants from "./constants";
export const getNewsFeedAction = {
    Default: () => ({
        type: NewsFeedConstants.GET_NEWS_FEED
    }),
    Fail: (error) => ({
        type: NewsFeedConstants.GET_NEWS_FEED_FAIL,
        error
    }),
    Success: (data) => ({
        type: NewsFeedConstants.GET_NEWS_FEED_SUCCESS,
        data
    })
};
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export const updateDetailIxAction = {
    WithUuid: (uuid) => ({
        type: NewsFeedConstants.UPDATE_DETAIL_IX,
        uuid
    })
};
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export const selectOrgUuidAction = {
    WithUuid: (uuid) => ({
        type: NewsFeedConstants.SELECT_ORG_UUID,
        uuid
    })
};
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export const toggleSelectCauseAction = {
    WithUuid: (uuid) => ({
        type: NewsFeedConstants.TOGGLE_SELECT_CAUSE,
        uuid
    })
};
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export const getNewsItemDetailAction = {
    WithUuid: (news_item_uuid) => ({
        type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL,
        news_item_uuid
    }),
    Default: () => ({
        type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL,
    }),
    Fail: (error) => ({
        type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL_FAIL,
        error
    }),
    Success: (data) => ({
        type: NewsFeedConstants.GET_NEWS_ITEM_DETAIL_SUCCESS,
        data
    })
};
//# sourceMappingURL=actions.js.map