import { takeLatest, all } from 'redux-saga/effects';
import DiscoverConstants from '../constants';
import defaultSaga from './controllers/defaultSaga';

export function* discoverSaga() {
  yield all([
    takeLatest(DiscoverConstants.DEFAULT_ACTION, defaultSaga)
  ]);
}

export default defaultSaga;
