import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectDetailItem } from 'containers/NewsFeed/selectors';
import { Dispatch } from 'redux';
import { getNewsItemDetailAction } from 'containers/NewsFeed/actions';

const mapStateToProps = createStructuredSelector({
  detailItem: makeSelectDetailItem()
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDetail: (uuid: string) => dispatch(getNewsItemDetailAction(uuid))
});

export default connect(mapStateToProps, mapDispatchToProps);