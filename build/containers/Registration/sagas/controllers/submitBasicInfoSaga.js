import { call, select, put } from 'redux-saga/effects';
import { getFormValues } from 'redux-form';
import api from 'utilities/api';
import NavigationService from 'containers/Navigation/NavigationService';
import errorHandler from 'utilities/errorHandler';
import { getContactSuccessAction } from 'containers/Contact/actions';
import { REGISTRATION_BASICINFO_FORM_NAME } from '../../containers/BasicInfo/components/Form';
function* submitBasicInfoSaga() {
    try {
        const formData = yield select(getFormValues(REGISTRATION_BASICINFO_FORM_NAME));
        const { data } = yield call(api, 'post', '/api/contact/create', {
            email: formData.email,
            password: formData.password
        });
        yield put(getContactSuccessAction(data));
        yield call(NavigationService.navigate, 'loggedIn');
    }
    catch (err) {
        errorHandler(err);
    }
}
export default submitBasicInfoSaga;
//# sourceMappingURL=submitBasicInfoSaga.js.map