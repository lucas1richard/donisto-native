import { createStructuredSelector } from 'reselect';
import { makeSelectContact } from './selectors';
import { connect } from 'react-redux';

const mapStateToProps = createStructuredSelector({
  contact: makeSelectContact()
});

const mapToProps = connect(mapStateToProps);

export default mapToProps;
