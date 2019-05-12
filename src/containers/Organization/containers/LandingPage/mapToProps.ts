import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectDetailOrganization } from 'containers/Organization/selectors';
import {
  getOrgDetailAction,
  updateOrgAction,
  createOrgLinksAction,
  deleteOrgLinksAction
} from 'containers/Organization/actions';

export const mapToProps = createStructuredSelector({
  organization: makeSelectDetailOrganization(),
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDetail: () => dispatch(getOrgDetailAction()),
  updateOrg: (onComplete: () => any) => {
    dispatch(updateOrgAction(onComplete));
  },
  createOrgLinks: () => dispatch(createOrgLinksAction()),
  deleteOrgLinks: (links: string[], orgUuid: string) => dispatch(deleteOrgLinksAction(links, orgUuid))
});

export default connect(mapToProps, mapDispatchToProps);