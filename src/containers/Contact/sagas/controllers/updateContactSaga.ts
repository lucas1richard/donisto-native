import { call, put, select } from 'redux-saga/effects';
import api from 'utilities/api';
import {
  updateContactSuccessAction,
  updateContactFailAction
} from 'containers/Contact/actions';
import { getFormValues } from 'redux-form';
import { UPDATE_CONTACT_FORM_NAME } from '../../containers/UpdateContact/components/Form';

function* updateContactSaga() {
  try {
    const formData = yield select(getFormValues(UPDATE_CONTACT_FORM_NAME));
    const { data } = yield call(api, 'put', '/api/contact', formData);
    yield put(updateContactSuccessAction(data));
  } catch (err) {
    yield put(updateContactFailAction(err));
  }
}

export default updateContactSaga;
