import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import makeSelectForm from './selectors';

const mapStateToProps = createStructuredSelector({
  Form: makeSelectForm()
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
