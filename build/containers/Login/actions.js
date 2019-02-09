import LoginConstants from "./constants";
export function testApi() {
    return {
        type: LoginConstants.TEST
    };
}
export function makeContact() {
    return {
        type: LoginConstants.MAKE_CONTACT
    };
}
export const loginAction = () => ({
    type: LoginConstants.LOGIN
});
//# sourceMappingURL=actions.js.map