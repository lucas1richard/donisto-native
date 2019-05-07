import { takeLatest, all } from 'redux-saga/effects';
import CreateNewsStoryConstants from '../constants';
import submitStorySaga from './controllers/submitStorySaga';

export function* CreateNewsStorySaga() {
  yield all([
    takeLatest(CreateNewsStoryConstants.SUBMIT_STORY, submitStorySaga)
  ]);
}

export default CreateNewsStorySaga;
