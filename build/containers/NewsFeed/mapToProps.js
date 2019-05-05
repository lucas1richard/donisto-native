import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectNewsFeed, makeSelectLoaded } from './selectors';
import { makeSelectOrganizations } from 'containers/Organization/selectors';
import { updateDetailIxAction } from './actions';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';
export const mapStateToProps = createStructuredSelector({
    newsfeed: makeSelectNewsFeed(),
    loaded: makeSelectLoaded(),
    organizations: makeSelectOrganizations()
});
export const mapDispatchToProps = (dispatch) => ({
    navDetail: (uuid) => {
        dispatch(updateDetailIxAction(uuid));
        NavigationService.navigate(routeNames.NEWS_ITEM_DETAIL);
    }
});
export default connect(mapStateToProps, mapDispatchToProps);
//# sourceMappingURL=mapToProps.js.map