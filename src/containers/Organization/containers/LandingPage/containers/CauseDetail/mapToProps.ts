import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectOrgCauseDetail } from 'containers/Organization/selectors';

export const mapStateToProps = createStructuredSelector({
  cause: makeSelectOrgCauseDetail()
});

export default connect(mapStateToProps);