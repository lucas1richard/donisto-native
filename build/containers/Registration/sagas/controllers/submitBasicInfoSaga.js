import { call, select, put } from 'redux-saga/effects';
import { getFormValues, startSubmit, stopSubmit } from 'redux-form';
import api from 'utilities/api';
import NavigationService from 'containers/Navigation/NavigationService';
import errorHandler from 'utilities/errorHandler';
import { getContactSuccessAction } from 'containers/Contact/actions';
import { REGISTRATION_BASICINFO_FORM_NAME } from '../../containers/BasicInfo/components/Form';
import logger from 'utilities/logger';
import routeNames from 'containers/Navigation/routeNames';
import { manualSetOutgoingHeaders } from 'utilities/request';
import getInitialData from 'containers/Login/sagas/controllers/getInitialData';
function* submitBasicInfoSaga() {
    try {
        logger.log(`Submit starting: ${REGISTRATION_BASICINFO_FORM_NAME}`, 'submitBasicInfoSaga');
        yield put(startSubmit(REGISTRATION_BASICINFO_FORM_NAME));
        const formData = yield select(getFormValues(REGISTRATION_BASICINFO_FORM_NAME));
        const { data, headers } = yield call(api, 'post', '/v1/contact/create', {
            email: formData.email,
            password: formData.password
        });
        yield call(manualSetOutgoingHeaders, headers.token, data.uuid);
        yield put(getContactSuccessAction(data));
        yield call(getInitialData);
        yield call(NavigationService.navigate, routeNames.LOGGED_IN);
    }
    catch (err) {
        errorHandler(err);
    }
    finally {
        logger.log(`Submit ending: ${REGISTRATION_BASICINFO_FORM_NAME}`, 'submitBasicInfoSaga');
        yield put(stopSubmit(REGISTRATION_BASICINFO_FORM_NAME));
    }
}
export default submitBasicInfoSaga;
//# sourceMappingURL=submitBasicInfoSaga.js.map