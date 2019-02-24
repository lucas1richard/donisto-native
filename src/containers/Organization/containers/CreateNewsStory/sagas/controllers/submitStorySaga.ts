import { all, call, select, put, delay } from 'redux-saga/effects';
import { getFormValues, startSubmit, stopSubmit } from 'redux-form';
import { CreateNewsStory_FORM_NAME } from '../../components/CreateNewsStoryForm';
import api from 'utilities/api';
import {
  submitStorySuccessAction,
  submitStoryFailAction,
  setCreateStoryStatusAction
} from '../../actions';
import { makeSelectActiveOrganization } from 'containers/Organization/selectors';
import logger from 'utilities/logger';
import { getNewsFeedAction } from 'containers/NewsFeed/actions';

function* submitStorySaga() {
  try {
    yield put(startSubmit(CreateNewsStory_FORM_NAME));
    const formData = yield select(getFormValues(CreateNewsStory_FORM_NAME));
    const activeOrganization = yield select(makeSelectActiveOrganization());
    const organizationUuid = activeOrganization.uuid;
    const newsStoryData = {
      ...formData,
      organizationUuid
    };

    logger.log(newsStoryData, 'submitStorySaga');

    const { data } = yield call(api, 'post', '/v1/newsfeed', newsStoryData);
    yield all([
      put(submitStorySuccessAction(data)),
      put(getNewsFeedAction())
    ]);

  } catch (err) {

    yield put(submitStoryFailAction(err));

  } finally {
    yield put(stopSubmit(CreateNewsStory_FORM_NAME));
    yield delay(1000);
    yield put(setCreateStoryStatusAction('editing'));
  }
}

export default submitStorySaga;
