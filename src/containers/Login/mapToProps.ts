import { connect } from 'react-redux';
import { testApi, makeContact, loginAction } from './actions';
import { Dispatch } from 'redux';

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    testApi: () => dispatch(testApi()),
    makeContact: () => dispatch(makeContact()),
    login: () => dispatch(loginAction())
  };
};

export default connect(undefined, mapDispatchToProps);
