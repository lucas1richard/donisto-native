import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectNewsFeed,
  makeSelectLoaded
} from './selectors';
import { makeSelectOrganizations } from 'containers/Organization/selectors';
import { Dispatch } from 'redux';
import { updateDetailIxAction } from './actions';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

export const mapStateToProps = createStructuredSelector({
  newsfeed: makeSelectNewsFeed(),
  loaded: makeSelectLoaded(),
  organizations: makeSelectOrganizations()
});

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    navDetail: (ix: number) => {
      dispatch(updateDetailIxAction(ix));
      NavigationService.navigate(routeNames.NEWS_ITEM_DETAIL);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
