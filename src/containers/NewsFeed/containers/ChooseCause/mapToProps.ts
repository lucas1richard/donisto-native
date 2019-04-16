import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCausesArray } from 'containers/Cause/selectors';
import { Dispatch } from 'redux';
// import { toggleSelectCauseAction } from 'containers/NewsFeed/actions';
import { makeSelectSelectedCauses } from 'containers/Cause/selectors';
import { toggleNewsFeedSelectAction } from 'containers/Cause/actions';

export const mapStateToProps = createStructuredSelector({
  causes: makeSelectCausesArray(),
  selectedCauses: makeSelectSelectedCauses()
});

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleSelect: (uuid: string) => dispatch(toggleNewsFeedSelectAction(uuid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
