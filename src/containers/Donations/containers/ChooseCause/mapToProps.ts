import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCausesArray } from 'containers/Cause/selectors';
import { Dispatch } from 'redux';
import { selectDonationCauseAction } from 'containers/Donations/actions';

const mapStateToProps = createStructuredSelector({
  causes: makeSelectCausesArray()
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectCause: (causeUuid: string) => dispatch(selectDonationCauseAction(causeUuid))
});

export default connect(mapStateToProps, mapDispatchToProps);