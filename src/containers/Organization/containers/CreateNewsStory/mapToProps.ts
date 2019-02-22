import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCreateNewsStory } from './selectors';

const mapStateToProps = createStructuredSelector({
  CreateNewsStory: makeSelectCreateNewsStory()
});

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
