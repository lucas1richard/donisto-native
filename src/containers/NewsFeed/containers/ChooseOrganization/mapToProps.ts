import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectOrganizations } from 'containers/Organization/selectors';
import { Dispatch } from 'redux';
import { selectOrgUuidAction } from 'containers/NewsFeed/actions';
import routeNames from 'containers/Navigation/routeNames';
import NavigationService from 'containers/Navigation/NavigationService';

export const mapStateToProps = createStructuredSelector({
  orgs: makeSelectOrganizations(),
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectOrg: (uuid: string) => {
    dispatch(selectOrgUuidAction(uuid));
    NavigationService.navigate(routeNames.CHOOSE_CAUSE_NI);
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
