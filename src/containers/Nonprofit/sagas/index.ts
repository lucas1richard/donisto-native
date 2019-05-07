import { takeLatest, all } from 'redux-saga/effects';
import NonprofitConstants from '../constants';
import defaultSaga from './controllers/defaultSaga';

export function* NonprofitSaga() {
  yield all([
    takeLatest(NonprofitConstants.DEFAULT_ACTION, defaultSaga)
  ]);
}

export default NonprofitSaga;
