import { call, select } from 'redux-saga/effects';
import api, { IApi } from 'utilities/api';
import logger from 'utilities/logger';
import { getFormValues } from 'redux-form';
import { LOGIN_FORM_NAME, ILoginFormData } from 'containers/Login/components/Form';

function* makeContact() {
  try {
    const formData: ILoginFormData = yield select(getFormValues(LOGIN_FORM_NAME));
    const { data } = yield call<IApi>(api, 'post', '/api/contact/create', formData);
    logger.log(data, 'makeContactSaga');
  } catch (err) {
    logger.error(err, 'makeContacts.ts');
  }
}

export default makeContact;
