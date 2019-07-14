import ContactConstants from '../constants';
export const initialContactState = {};
const contactReducer = (state = initialContactState, action) => {
    switch (action.type) {
        case ContactConstants.GET_CONTACT_SUCCESS:
            return Object.assign({}, state, action.data);
        case ContactConstants.GET_CONTACT_FAIL:
            return Object.assign({}, state, { error: action.error });
        case ContactConstants.UPDATE_CONTACT_SUCCESS:
            return Object.assign({}, state, action.data);
        case ContactConstants.UPDATE_CONTACT_FAIL:
            return Object.assign({}, state, { error: action.error });
        case ContactConstants.GET_ORG_NEWS_FEED:
            return state;
        case ContactConstants.GET_ORG_NEWS_FEED_SUCCESS:
            return Object.assign({}, state, { orgNewsFeed: action.data });
        case ContactConstants.GET_ORG_NEWS_FEED_FAIL:
            return Object.assign({}, state, { error: action.error });
        default:
            return state;
    }
};
export default contactReducer;
//# sourceMappingURL=index.js.map