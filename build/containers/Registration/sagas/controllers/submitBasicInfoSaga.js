import { call, select, put } from 'redux-saga/effects';
import { getFormValues } from 'redux-form';
import api from 'utilities/api';
import NavigationService from 'containers/Navigation/NavigationService';
import errorHandler from 'utilities/errorHandler';
import { getContactSuccessAction } from 'containers/Contact/actions';
import { REGISTRATION_BASICINFO_FORM_NAME } from '../../containers/BasicInfo/components/Form';
import logger from 'utilities/logger';
import { getNewsFeedAction } from 'containers/NewsFeed/actions';
function* submitBasicInfoSaga() {
    try {
        const formData = yield select(getFormValues(REGISTRATION_BASICINFO_FORM_NAME));
        logger.log(formData, 'submitBasicInfoSaga');
        const { data } = yield call(api, 'post', '/v1/contact/create', {
            email: formData.email,
            password: formData.password
        });
        yield put(getNewsFeedAction());
        yield put(getContactSuccessAction(data));
        yield call(NavigationService.navigate, 'loggedIn');
    }
    catch (err) {
        errorHandler(err);
    }
}
export default submitBasicInfoSaga;
//# sourceMappingURL=submitBasicInfoSaga.js.map