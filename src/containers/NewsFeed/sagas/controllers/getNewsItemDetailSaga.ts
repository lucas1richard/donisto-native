import { call, put } from 'redux-saga/effects';
import logger from 'utilities/logger';
import api from 'utilities/api';
import { getNewsItemDetailAction } from 'containers/NewsFeed/actions';
import { INewsFeedActions } from 'containers/NewsFeed/types/actions';

function* getNewsFeedItemDetailSaga(action: INewsFeedActions.GetNewsItemDetail['WithUuid']) {
  try {
    const { data } = yield call(api, 'get', `/v1/newsfeed/detail/${action.news_item_uuid}`);
    yield put(getNewsItemDetailAction.Success(data));
  } catch (err) {
    logger.log(err, 'getNewsFeedItemDetailSaga');
    yield put(getNewsItemDetailAction.Fail(err));
  }
}

export default getNewsFeedItemDetailSaga;