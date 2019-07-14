import { call, put, select } from 'redux-saga/effects';
import api from 'utilities/api';
import { updateContactAction } from 'containers/Contact/actions';
import { getFormValues, startSubmit, stopSubmit } from 'redux-form';
import { UPDATE_CONTACT_FORM_NAME } from '../../containers/UpdateContact/components/Form';

function* updateContactSaga() {
  try {
    yield put(startSubmit(UPDATE_CONTACT_FORM_NAME));
    const formData = yield select(getFormValues(UPDATE_CONTACT_FORM_NAME));
    const { data } = yield call(api, 'put', '/v1/contact', formData);
    yield put(updateContactAction.Success(data));
  } catch (err) {
    yield put(updateContactAction.Fail(err));
  } finally {
    yield put(stopSubmit(UPDATE_CONTACT_FORM_NAME));
  }
}

export default updateContactSaga;
