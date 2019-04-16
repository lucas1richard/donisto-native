import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCause } from './selectors';

const mapStateToProps = createStructuredSelector({
  Cause: makeSelectCause()
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
