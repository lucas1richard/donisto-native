import { createStructuredSelector } from 'reselect';
import { makeSelectContact, makeSelectOrgNewsFeed } from './selectors';
import { connect } from 'react-redux';
import { makeSelectCausesArray } from 'containers/Cause/selectors';
import { makeSelectOrganizations } from 'containers/Organization/selectors';
import { selectOrgDetailAction } from 'containers/Organization/actions';
import { Dispatch } from 'redux';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact(),
  orgNewsFeed: makeSelectOrgNewsFeed(),
  causes: makeSelectCausesArray(),
  organizations: makeSelectOrganizations(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  goToOrgDetail: (uuid: string) => {
    dispatch(selectOrgDetailAction(uuid));
    NavigationService.navigate(routeNames.ORGANIZATION_LANDING_PAGE_HOME);
  }
});

const mapToProps = connect(mapStateToProps, mapDispatchToProps);

export default mapToProps;
