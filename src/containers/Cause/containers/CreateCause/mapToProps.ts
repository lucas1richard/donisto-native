import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from 'redux';
import { createCauseAction } from 'containers/Cause/actions';

export const mapStateToProps = createStructuredSelector({});
export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createCause: () => dispatch(createCauseAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);