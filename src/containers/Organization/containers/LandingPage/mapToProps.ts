import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectDetailOrganization } from 'containers/Organization/selectors';
import {
  getOrgDetailAction,
  updateOrgAction,
  createOrgLinksAction,
  deleteOrgLinksAction,
  selectOrgCauseDetailAction
} from 'containers/Organization/actions';
import { makeSelectDetailOrgCauses } from 'containers/Cause/selectors';
import NavigationService from 'containers/Navigation/NavigationService';
import routeNames from 'containers/Navigation/routeNames';

export const mapToProps = createStructuredSelector({
  organization: makeSelectDetailOrganization(),
  causes: makeSelectDetailOrgCauses()
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDetail: () => dispatch(getOrgDetailAction.Default()),
  updateOrg: (onComplete: () => any) => {
    dispatch(updateOrgAction.WithCallBack(onComplete));
  },
  viewCauseDetail: (uuid: string) => {
    dispatch(selectOrgCauseDetailAction.WithUuid(uuid));
    NavigationService.navigate(routeNames.ORGANIZATION_LANDING_PAGE_CAUSE_DETAIL);
  },
  createOrgLinks: () => dispatch(createOrgLinksAction.Default()),
  deleteOrgLinks: (links: string[], orgUuid: string) => {
    dispatch(deleteOrgLinksAction.WithLinks(links, orgUuid));
  }
});

export default connect(mapToProps, mapDispatchToProps);