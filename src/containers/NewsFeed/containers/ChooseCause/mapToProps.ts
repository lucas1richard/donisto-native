import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectContactCauses } from 'containers/Cause/selectors';
import { Dispatch } from 'redux';
// import { toggleSelectCauseAction } from 'containers/NewsFeed/actions';
import { makeSelectSelectedCauses } from 'containers/Cause/selectors';
import { toggleNewsFeedSelectAction } from 'containers/Cause/actions';
import { makeSelectSelectedOrg } from 'containers/NewsFeed/selectors';

export const mapStateToProps = createStructuredSelector({
  causes: makeSelectContactCauses(),
  selectedCauses: makeSelectSelectedCauses(),
  selectedOrg: makeSelectSelectedOrg(),
});

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleSelect: (uuid: string) => dispatch(toggleNewsFeedSelectAction(uuid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
