import { createStructuredSelector } from 'reselect';
import { makeSelectDonationDetail } from 'containers/Donations/selectors';
import { connect } from 'react-redux';

const mapStateToProps = createStructuredSelector({
  donation: makeSelectDonationDetail()
});

export default connect(mapStateToProps);