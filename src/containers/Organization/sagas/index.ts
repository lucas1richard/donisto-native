import { takeLatest, all } from 'redux-saga/effects';
import OrganizationConstants from '../constants';
import defaultSaga from './controllers/defaultSaga';

// Individual exports for testing
export function* OrganizationSaga() {
  yield all([
    takeLatest(OrganizationConstants.DEFAULT_ACTION, defaultSaga)
  ]);
}

// All sagas to be loaded
export default OrganizationSaga;
