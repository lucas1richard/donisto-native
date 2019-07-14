import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectDiscoverOrgs,
  makeSelectDiscoverOrgsLoaded
} from 'containers/Organization/selectors';
import {
  followOrgAction,
  getDiscoverOrgs,
  rejectFollowOrg
} from 'containers/Organization/actions';

const mapStateToProps = createStructuredSelector({
  discoverOrgs: makeSelectDiscoverOrgs(),
  loaded: makeSelectDiscoverOrgsLoaded(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDiscoverOrgs: () => dispatch(getDiscoverOrgs.Default()),
  followOrg: (uuid: string) => dispatch(followOrgAction.WithUuid(uuid)),
  rejectFollowOrg: (uuid: string) => dispatch(rejectFollowOrg.WithUuid(uuid)),
});

export default connect(mapStateToProps, mapDispatchToProps);
