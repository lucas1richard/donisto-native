import { connect } from 'react-redux';
import { testApi, makeContact, loginAction } from './actions';
export const mapDispatchToProps = (dispatch) => {
    return {
        testApi: () => dispatch(testApi()),
        makeContact: () => dispatch(makeContact()),
        login: () => dispatch(loginAction())
    };
};
export default connect(undefined, mapDispatchToProps);
//# sourceMappingURL=mapToProps.js.map