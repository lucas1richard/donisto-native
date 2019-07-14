import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectNewsFeed,
  makeSelectLoaded
} from './selectors';
import { makeSelectOrganizations } from 'containers/Organization/selectors';
import { Dispatch } from 'redux';
import { updateDetailIxAction, getNewsFeedAction } from './actions';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

export const mapStateToProps = createStructuredSelector({
  newsfeed: makeSelectNewsFeed(),
  loaded: makeSelectLoaded(),
  organizations: makeSelectOrganizations()
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  navDetail: (uuid: string) => {
    dispatch(updateDetailIxAction.WithUuid(uuid));
    NavigationService.navigate(routeNames.NEWS_ITEM_DETAIL);
  },
  getNewsFeed: () => dispatch(getNewsFeedAction.Default()),
});

export default connect(mapStateToProps, mapDispatchToProps);
