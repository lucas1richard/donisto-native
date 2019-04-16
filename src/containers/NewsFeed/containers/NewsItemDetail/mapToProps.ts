import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectDetailItem } from 'containers/NewsFeed/selectors';

const mapStateToProps = createStructuredSelector({
  detailItem: makeSelectDetailItem()
});

export default connect(mapStateToProps);