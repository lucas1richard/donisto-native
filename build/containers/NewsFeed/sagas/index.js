import { all, takeLatest } from 'redux-saga/effects';
import getNewsFeedSaga from './controllers/getNewsFeedSaga';
import NewsFeedConstants from '../constants';
import getNewsFeedItemDetailSaga from './controllers/getNewsItemDetailSaga';
function* newsFeedSagas() {
    yield all([
        takeLatest(NewsFeedConstants.GET_NEWS_FEED, getNewsFeedSaga),
        takeLatest(NewsFeedConstants.GET_NEWS_ITEM_DETAIL, getNewsFeedItemDetailSaga),
    ]);
}
export default newsFeedSagas;
//# sourceMappingURL=index.js.map