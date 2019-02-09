import { takeLatest, all } from 'redux-saga/effects';
import MessagesConstants from '../constants';
import defaultSaga from './controllers/defaultSaga';

// Individual exports for testing
export function* MessagesSaga() {
  yield all([
    takeLatest(MessagesConstants.DEFAULT_ACTION, defaultSaga)
  ]);
}

// All sagas to be loaded
export default defaultSaga;
