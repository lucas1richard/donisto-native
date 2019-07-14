import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dispatch } from 'redux';
import { createCauseAction, selectOrgCreateCauseAction } from 'containers/Cause/actions';
import { makeSelectContactOrganizations } from 'containers/Organization/selectors';
import { makeSelectCreateCauseOrg } from 'containers/Cause/selectors';

export const mapStateToProps = createStructuredSelector({
  organizations: makeSelectContactOrganizations('alphabetized'),
  selectedOrganization: makeSelectCreateCauseOrg(),
});

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createCause: () => dispatch(createCauseAction.Default()),
    selectOrganization: (uuid: string) => dispatch(selectOrgCreateCauseAction(uuid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);