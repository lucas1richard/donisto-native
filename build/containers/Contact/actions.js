import ContactConstants from "./constants";
export const getContactAction = () => ({
    type: ContactConstants.GET_CONTACT
});
export const getContactSuccessAction = (contact) => ({
    type: ContactConstants.GET_CONTACT_SUCCESS,
    contact
});
export const getContactFailAction = (error) => ({
    type: ContactConstants.GET_CONTACT_FAIL,
    error
});
export const updateContactAction = () => ({
    type: ContactConstants.UPDATE_CONTACT
});
export const updateContactSuccessAction = (contact) => ({
    type: ContactConstants.UPDATE_CONTACT_SUCCESS,
    contact
});
export const updateContactFailAction = (error) => ({
    type: ContactConstants.UPDATE_CONTACT_FAIL,
    error
});
//# sourceMappingURL=actions.js.map