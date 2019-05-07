import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectNonprofit } from './selectors';

const mapStateToProps = createStructuredSelector({
  Nonprofit: makeSelectNonprofit()
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
