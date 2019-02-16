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
/** To be combined below */
const reducers = {
    launch: (state = {}) => state,
    contact,
    donations,
    discover,
    form,
    messages,
    newsfeed
};
const combinedReducers = combineReducers(reducers);
export const initialState = {};
export default combinedReducers;
//# sourceMappingURL=reducers.js.map