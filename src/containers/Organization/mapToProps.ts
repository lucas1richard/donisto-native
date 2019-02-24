import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectOrganization, makeSelectActiveOrganization } from './selectors';
import { makeSelectOrganizationUuid } from 'containers/Contact/selectors';
import { registerOrgAction } from './actions';

const mapStateToProps = createStructuredSelector({
  Organization: makeSelectOrganization(),
  organizationUuid: makeSelectOrganizationUuid(),
  activeOrg: makeSelectActiveOrganization()
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    registerNewOrg: () => dispatch(registerOrgAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
