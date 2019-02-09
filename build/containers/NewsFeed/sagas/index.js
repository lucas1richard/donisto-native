import { all, takeLatest } from 'redux-saga/effects';
import getNewsFeedSaga from './controllers/getNewsFeedSaga';
import NewsFeedConstants from '../constants';
function* newsFeedSagas() {
    yield all([
        takeLatest(NewsFeedConstants.GET_NEWS_FEED, getNewsFeedSaga)
    ]);
}
export default newsFeedSagas;
//# sourceMappingURL=index.js.map