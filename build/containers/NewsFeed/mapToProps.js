import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectNewsFeed, makeSelectLoaded } from './selectors';
export const mapStateToProps = createStructuredSelector({
    newsfeed: makeSelectNewsFeed(),
    loaded: makeSelectLoaded()
});
export default connect(mapStateToProps);
//# sourceMappingURL=mapToProps.js.map