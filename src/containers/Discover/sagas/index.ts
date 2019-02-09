import { takeLatest, all } from 'redux-saga/effects';
import DiscoverConstants from '../constants';
import defaultSaga from './controllers/defaultSaga';

// Individual exports for testing
export function* discoverSaga() {
  yield all([
    takeLatest(DiscoverConstants.DEFAULT_ACTION, defaultSaga)
  ]);
}

// All sagas to be loaded
export default defaultSaga;
