import { takeLatest, all } from 'redux-saga/effects';
import CreateNewsStoryConstants from '../constants';
import defaultSaga from './controllers/defaultSaga';

// Individual exports for testing
export function* CreateNewsStorySaga() {
  yield all([
    takeLatest(CreateNewsStoryConstants.DEFAULT_ACTION, defaultSaga)
  ]);
}

// All sagas to be loaded
export default CreateNewsStorySaga;
