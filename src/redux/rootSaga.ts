
import { all, fork } from 'redux-saga/effects';
import loginSagas from 'containers/Login/sagas';
import registrationSagas from 'containers/Registration/sagas';
import newsFeedSagas from 'containers/NewsFeed/sagas';

function* rootSaga() {
  yield all([
    fork(loginSagas),
    fork(registrationSagas),
    fork(newsFeedSagas)
  ]);
}

export default [rootSaga];
