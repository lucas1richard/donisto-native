import { takeLatest, all } from 'redux-saga/effects';
import CreateNewsStoryConstants from '../constants';
import submitStorySaga from './controllers/submitStorySaga';

// Individual exports for testing
export function* CreateNewsStorySaga() {
  yield all([
    takeLatest(CreateNewsStoryConstants.SUBMIT_STORY, submitStorySaga)
  ]);
}

// All sagas to be loaded
export default CreateNewsStorySaga;
