import { call, select } from 'redux-saga/effects';
import api from 'utilities/api';
import logger from 'utilities/logger';
import { getFormValues } from 'redux-form';
import { LOGIN_FORM_NAME } from 'containers/Login/components/Form';
function* makeContact() {
    try {
        const formData = yield select(getFormValues(LOGIN_FORM_NAME));
        const { data } = yield call(api, 'post', '/v1/contact/create', formData);
        logger.log(data, 'makeContactSaga');
    }
    catch (err) {
        logger.error(err, 'makeContacts.ts');
    }
}
export default makeContact;
//# sourceMappingURL=makeContact.js.map