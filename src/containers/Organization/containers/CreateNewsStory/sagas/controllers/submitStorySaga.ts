import { all, call, select, put, delay } from 'redux-saga/effects';
import { getFormValues, startSubmit, stopSubmit } from 'redux-form';
import { CreateNewsStory_FORM_NAME } from '../../components/CreateNewsStoryForm';
import api from 'utilities/api';
import {
  submitStorySuccessAction,
  submitStoryFailAction,
  setCreateStoryStatusAction
} from '../../actions';
import logger from 'utilities/logger';
import { getNewsFeedAction } from 'containers/NewsFeed/actions';
import { getOrgNewsFeedAction } from 'containers/Contact/actions';
import { makeSelectSelectedCauses } from 'containers/Cause/selectors';
import { makeSelectSelectedOrg } from 'containers/NewsFeed/selectors';

function* submitStorySaga() {
  try {
    yield put(startSubmit(CreateNewsStory_FORM_NAME));
    const formData = yield select(getFormValues(CreateNewsStory_FORM_NAME));
    const selectedOrganization = yield select(makeSelectSelectedOrg());
    const organizationUuid = selectedOrganization.uuid;
    const selectedCauses = yield select(makeSelectSelectedCauses());
    const newsStoryData = {
      ...formData,
      organizationUuid,
      causesUuid: Object.keys(selectedCauses)
    };

    logger.log(newsStoryData, 'submitStorySaga');

    const { data } = yield call(api, 'post', '/v1/newsfeed', newsStoryData);
    yield all([
      put(submitStorySuccessAction(data)),
      put(getNewsFeedAction.Default()),
      put(getOrgNewsFeedAction.Default())
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
