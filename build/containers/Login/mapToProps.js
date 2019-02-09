import { connect } from 'react-redux';
import { testApi, makeContact, loginAction } from './actions';
import { createStructuredSelector } from 'reselect';
import { isSubmitting } from 'redux-form';
import { LOGIN_FORM_NAME } from './components/Form';
export const mapStateToProps = createStructuredSelector({
    submitting: isSubmitting(LOGIN_FORM_NAME)
});
export const mapDispatchToProps = (dispatch) => {
    return {
        testApi: () => dispatch(testApi()),
        makeContact: () => dispatch(makeContact()),
        login: () => dispatch(loginAction())
    };
};
export default connect(mapStateToProps, mapDispatchToProps);
//# sourceMappingURL=mapToProps.js.map