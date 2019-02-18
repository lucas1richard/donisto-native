import { call, put } from 'redux-saga/effects';
import logger from 'utilities/logger';
import api from "utilities/api";
import {
  getNewsFeedSuccessAction,
  getNewsFeedFailAction
} from 'containers/NewsFeed/actions';

function* getNewsFeedSaga() {
  try {
    const { data } = yield call(api, 'get', '/v1/newsfeed/get');
    yield put(getNewsFeedSuccessAction(data));
  } catch (err) {
    logger.log(err, 'getNewsFeedSaga');
    yield put(getNewsFeedFailAction(err));
  }
}

export default getNewsFeedSaga;