import { createStructuredSelector } from 'reselect';
import { makeSelectContact, makeSelectOrgNewsFeed } from './selectors';
import { connect } from 'react-redux';
import { makeSelectCausesArray } from 'containers/Cause/selectors';

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact(),
  orgNewsFeed: makeSelectOrgNewsFeed(),
  causes: makeSelectCausesArray()
});

const mapToProps = connect(mapStateToProps);

export default mapToProps;
