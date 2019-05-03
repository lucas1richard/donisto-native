import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createDonationAction } from 'containers/Donations/actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createDonation: () => dispatch(createDonationAction())
});

export default connect(undefined, mapDispatchToProps);