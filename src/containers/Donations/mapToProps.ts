import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectDonations } from './selectors';

const mapStateToProps = createStructuredSelector({
  Donations: makeSelectDonations()
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
