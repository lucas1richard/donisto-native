import { all, call, put, select } from 'redux-saga/effects';
import errorHandler from 'utilities/errorHandler';
import api from 'utilities/api';
import { getFormValues, stopSubmit, startSubmit } from 'redux-form';
import { LOGIN_FORM_NAME } from 'containers/Login/components/Form';
import NavigationService from 'containers/Navigation/NavigationService';
import {
  getContactSuccessAction,
  getContactFailAction
} from 'containers/Contact/actions';
import { getNewsFeedAction } from 'containers/NewsFeed/actions';

function* loginSaga() {
  try {
    yield put(startSubmit(LOGIN_FORM_NAME));
    const formData = yield select(getFormValues(LOGIN_FORM_NAME));
    const { data } = yield call(api, 'post', '/api/contact/get', formData);
    yield all([
      put(getContactSuccessAction(data)),
      put(getNewsFeedAction())
    ]);
    yield call(NavigationService.navigate, 'loggedIn');
  } catch (err) {
    yield put(getContactFailAction(err));
    errorHandler(err);
  } finally {
    yield put(stopSubmit(LOGIN_FORM_NAME));
  }
}

export default loginSaga;
