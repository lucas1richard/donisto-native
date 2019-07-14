import { call, put } from 'redux-saga/effects';
import logger from 'utilities/logger';
import api from 'utilities/api';
import { getNewsFeedAction } from 'containers/NewsFeed/actions';
function* getNewsFeedSaga() {
    try {
        const { data } = yield call(api, 'get', '/v1/newsfeed/get');
        yield put(getNewsFeedAction.Success(data));
    }
    catch (err) {
        logger.log(err, 'getNewsFeedSaga');
        yield put(getNewsFeedAction.Fail(err));
    }
}
export default getNewsFeedSaga;
//# sourceMappingURL=getNewsFeedSaga.js.map