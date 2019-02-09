import { takeLatest, all } from 'redux-saga/effects';
import FormConstants from './constants';
import defaultSaga from './controllers/defaultSaga';
// Individual exports for testing
export function* defaultSaga() {
    yield all([
        takeLatest(FormConstants.DEFAULT_ACTION, defaultSaga)
    ]);
}
// All sagas to be loaded
export default defaultSaga;
//# sourceMappingURL=index.js.map