import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectOrganizations } from 'containers/Organization/selectors';

export const mapStateToProps = createStructuredSelector({
  orgs: makeSelectOrganizations()
});

export default connect(mapStateToProps);
