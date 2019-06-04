import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectDonationsWithCauses } from './selectors';
import { selectDetailViewAction } from './actions';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

const mapStateToProps = createStructuredSelector({
  donations: makeSelectDonationsWithCauses()
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    viewDetail: (donationUuid: string) => {
      dispatch(selectDetailViewAction(donationUuid));
      NavigationService.navigate(routeNames.DONATIONS_VIEW);
    },
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
