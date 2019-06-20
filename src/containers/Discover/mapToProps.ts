import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectDiscoverOrgs,
  makeSelectDiscoverOrgsLoaded
} from 'containers/Organization/selectors';
import {
  getDiscoverOrgsAction,
  followOrgAction,
  rejectFollowOrgAction
} from 'containers/Organization/actions';

const mapStateToProps = createStructuredSelector({
  discoverOrgs: makeSelectDiscoverOrgs(),
  loaded: makeSelectDiscoverOrgsLoaded(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDiscoverOrgs: () => dispatch(getDiscoverOrgsAction()),
  followOrg: (uuid: string) => dispatch(followOrgAction(uuid)),
  rejectFollowOrg: (uuid: string) => dispatch(rejectFollowOrgAction(uuid)),
});

export default connect(mapStateToProps, mapDispatchToProps);
