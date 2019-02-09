import ContactConstants from "../constants";
const initialContactState = {};
const contactReducer = (state = initialContactState, action) => {
    switch (action.type) {
        case ContactConstants.GET_CONTACT_SUCCESS:
            return action.contact;
        case ContactConstants.GET_CONTACT_FAIL:
            return Object.assign({}, state, { error: action.error });
        default:
            return state;
    }
};
export default contactReducer;
//# sourceMappingURL=index.js.map