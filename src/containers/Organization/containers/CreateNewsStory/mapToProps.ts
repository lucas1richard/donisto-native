import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectCreateNewsStory,
  makeSelectCreateNewsStoryStatus
} from './selectors';
import { submitStoryAction } from './actions';

const mapStateToProps = createStructuredSelector({
  CreateNewsStory: makeSelectCreateNewsStory(),
  status: makeSelectCreateNewsStoryStatus()
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    submitStory: () => dispatch(submitStoryAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
