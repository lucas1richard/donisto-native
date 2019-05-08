import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectDetailOrganization } from 'containers/Organization/selectors';
import { getOrgDetailAction, updateOrgAction } from 'containers/Organization/actions';
import { Dispatch } from 'redux';

export const mapToProps = createStructuredSelector({
  organization: makeSelectDetailOrganization(),
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDetail: () => dispatch(getOrgDetailAction()),
  updateOrg: (onComplete: () => any) => {
    dispatch(updateOrgAction(onComplete));
  },
});

export default connect(mapToProps, mapDispatchToProps);