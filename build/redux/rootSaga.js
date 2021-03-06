import { all, fork } from 'redux-saga/effects';
import loginSagas from 'containers/Login/sagas';
import registrationSagas from 'containers/Registration/sagas';
import newsFeedSagas from 'containers/NewsFeed/sagas';
import donationsSagas from 'containers/Donations/sagas';
import discoverSagas from 'containers/Discover/sagas';
import messagesSagas from 'containers/Messages/sagas';
import contactSagas from 'containers/Contact/sagas';
import causeSagas from 'containers/Cause/sagas';
import orgnizationSagas from 'containers/Organization/sagas';
function* rootSaga() {
    yield all([
        fork(loginSagas),
        fork(registrationSagas),
        fork(newsFeedSagas),
        fork(donationsSagas),
        fork(discoverSagas),
        fork(messagesSagas),
        fork(contactSagas),
        fork(orgnizationSagas),
        fork(causeSagas)
    ]);
}
export default [rootSaga];
//# sourceMappingURL=rootSaga.js.map