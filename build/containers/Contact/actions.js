import ContactConstants from "./constants";
export const getContactAction = {
    Default: () => ({
        type: ContactConstants.GET_CONTACT
    }),
    Fail: (error) => ({
        type: ContactConstants.GET_CONTACT_FAIL,
        error
    }),
    Success: (data) => ({
        type: ContactConstants.GET_CONTACT_SUCCESS,
        data
    })
};
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export const updateContactAction = {
    Default: () => ({
        type: ContactConstants.UPDATE_CONTACT,
    }),
    Fail: (error) => ({
        type: ContactConstants.UPDATE_CONTACT_FAIL,
        error,
    }),
    Success: (data) => ({
        type: ContactConstants.UPDATE_CONTACT_SUCCESS,
        data,
    }),
};
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
export const getOrgNewsFeedAction = {
    Default: () => ({
        type: ContactConstants.GET_ORG_NEWS_FEED,
    }),
    Fail: (error) => ({
        type: ContactConstants.GET_ORG_NEWS_FEED_FAIL,
        error,
    }),
    Success: (data) => ({
        type: ContactConstants.GET_ORG_NEWS_FEED_SUCCESS,
        data
    }),
};
//# sourceMappingURL=actions.js.map