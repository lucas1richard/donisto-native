import { all, takeLatest } from 'redux-saga/effects';
import ContactConstants from '../constants';
import updateContactSaga from './controllers/updateContactSaga';

function* contactSagas() {
  yield all([
    takeLatest(ContactConstants.UPDATE_CONTACT, updateContactSaga)
  ]);
}

export default contactSagas;
