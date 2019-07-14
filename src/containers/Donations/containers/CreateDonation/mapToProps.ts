import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createDonationAction } from 'containers/Donations/actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectCreateDonationsCause } from 'containers/Donations/selectors';

export const mapStateToProps = createStructuredSelector({
  cause: makeSelectCreateDonationsCause()
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  createDonation: () => dispatch(createDonationAction.Default()),
});

export default connect(mapStateToProps, mapDispatchToProps);