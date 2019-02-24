/*
 * reducer js
 * Combine the reducers to pass into the store
 */
import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import contact from 'containers/Contact/reducer';
import newsfeed from 'containers/NewsFeed/reducer';
import donations from 'containers/Donations/reducer';
import discover from 'containers/Discover/reducer';
import messages from 'containers/Messages/reducer';
import organization from 'containers/Organization/reducer';
import createNewsStory from 'containers/Organization/containers/CreateNewsStory/reducer';
/** To be combined below */
const reducers = {
    contact,
    donations,
    discover,
    form,
    messages,
    organization,
    newsfeed,
    createNewsStory
};
const combinedReducers = combineReducers(reducers);
export const initialState = {};
export default combinedReducers;
//# sourceMappingURL=reducers.js.map