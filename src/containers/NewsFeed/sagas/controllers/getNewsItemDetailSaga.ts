import { call, put } from 'redux-saga/effects';
import logger from 'utilities/logger';
import api from 'utilities/api';
import {
  getNewsItemDetailSuccessAction,
  getNewsItemDetailFailAction,
  IGetNewsItemDetailAction
} from 'containers/NewsFeed/actions';

function* getNewsFeedItemDetailSaga(action: IGetNewsItemDetailAction) {
  try {
    const { data } = yield call(api, 'get', `/v1/newsfeed/detail/${action.news_item_uuid}`);
    yield put(getNewsItemDetailSuccessAction(data));
  } catch (err) {
    logger.log(err, 'getNewsFeedItemDetailSaga');
    yield put(getNewsItemDetailFailAction(err));
  }
}

export default getNewsFeedItemDetailSaga;