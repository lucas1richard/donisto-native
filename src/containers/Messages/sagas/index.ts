import { takeLatest, all } from 'redux-saga/effects';
import MessagesConstants from '../constants';
import defaultSaga from './controllers/defaultSaga';

export function* MessagesSaga() {
  yield all([
    takeLatest(MessagesConstants.DEFAULT_ACTION, defaultSaga)
  ]);
}

export default defaultSaga;
