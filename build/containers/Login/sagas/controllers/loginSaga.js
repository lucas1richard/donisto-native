import { all, call, put, select } from 'redux-saga/effects';
import errorHandler from 'utilities/errorHandler';
import api from 'utilities/api';
import { getFormValues, stopSubmit, startSubmit } from 'redux-form';
import { LOGIN_FORM_NAME } from 'containers/Login/components/Form';
import NavigationService from 'containers/Navigation/NavigationService';
import { getContactSuccessAction, getContactFailAction } from 'containers/Contact/actions';
import { getNewsFeedAction } from 'containers/NewsFeed/actions';
import showToast from 'components/Toast';
import { getDonationsAction } from 'containers/Donations/actions';
import { manualSetOutgoingHeaders } from 'utilities/request';
function* loginSaga() {
    try {
        yield put(startSubmit(LOGIN_FORM_NAME));
        const formData = yield select(getFormValues(LOGIN_FORM_NAME));
        const { data, headers } = yield call(api, 'post', '/v1/login', formData);
        yield call(manualSetOutgoingHeaders, headers.token, data.uuid);
        yield all([
            put(getContactSuccessAction(data)),
            put(getNewsFeedAction()),
            put(getDonationsAction())
        ]);
        yield call(NavigationService.navigate, 'loggedIn');
    }
    catch (err) {
        yield put(getContactFailAction(err));
        if (err.status === 401) {
            showToast({
                text: 'Your email or password didn\'t match our records'
            }, 'error');
        }
        errorHandler(err);
    }
    finally {
        yield put(stopSubmit(LOGIN_FORM_NAME));
    }
}
export default loginSaga;
//# sourceMappingURL=loginSaga.js.map