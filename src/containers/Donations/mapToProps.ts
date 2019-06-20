import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectDonationsWithCauses } from './selectors';
import { selectDetailViewAction, getDonationsByIdAction } from './actions';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';
import { getCauseDetailAction } from 'containers/Cause/actions';

const mapStateToProps = createStructuredSelector({
  donations: makeSelectDonationsWithCauses()
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    viewDetail: (donationUuid: string) => {
      dispatch(selectDetailViewAction(donationUuid));
      NavigationService.navigate(routeNames.DONATIONS_VIEW);
    },
    getDonationsById: (ids: string[]) => {
      dispatch(getDonationsByIdAction(ids));
    },
    getCauseDetailsById: (ids: string[]) => {
      dispatch(getCauseDetailAction(ids));
    },
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
