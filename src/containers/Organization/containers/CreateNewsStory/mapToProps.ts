import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectCreateNewsStory,
  makeSelectCreateNewsStoryStatus
} from './selectors';
import { submitStoryAction } from './actions';
import { makeSelectOrganizations } from 'containers/Organization/selectors';

const mapStateToProps = createStructuredSelector({
  CreateNewsStory: makeSelectCreateNewsStory(),
  status: makeSelectCreateNewsStoryStatus(),
  organizations: makeSelectOrganizations()
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    submitStory: () => dispatch(submitStoryAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
