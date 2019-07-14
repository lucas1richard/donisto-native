import { createStructuredSelector } from 'reselect';
import { makeSelectContact, makeSelectOrgNewsFeed } from './selectors';
import { connect } from 'react-redux';
import { makeSelectContactCauses } from 'containers/Cause/selectors';
import { makeSelectOrganizations } from 'containers/Organization/selectors';
import { selectOrgDetailAction } from 'containers/Organization/actions';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';
const mapStateToProps = createStructuredSelector({
    contact: makeSelectContact(),
    orgNewsFeed: makeSelectOrgNewsFeed(),
    causes: makeSelectContactCauses(),
    organizations: makeSelectOrganizations(),
});
const mapDispatchToProps = (dispatch) => ({
    goToOrgDetail: (uuid) => {
        dispatch(selectOrgDetailAction.WithUuid(uuid));
        NavigationService.navigate(routeNames.ORGANIZATION_LANDING_PAGE_HOME);
    }
});
const mapToProps = connect(mapStateToProps, mapDispatchToProps);
export default mapToProps;
//# sourceMappingURL=mapToProps.js.map