import { call } from 'redux-saga/effects';
import api from 'utilities/api';
import logger from 'utilities/logger';
function* testAPI() {
    const { data } = yield call(api, 'get', '/api/contact');
    logger.log(data, 'testSaga');
}
export default testAPI;
//# sourceMappingURL=getContact.js.map