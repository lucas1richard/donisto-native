import { newsfeedInitialState } from "./reducer";
import { createSelector } from "reselect";
export const selectNewsFeedDomain = () => (state) => state.newsfeed || newsfeedInitialState;
export const makeSelectLoaded = () => createSelector(selectNewsFeedDomain(), (substate) => substate.ui.loaded);
export const makeSelectNewsFeed = () => createSelector(selectNewsFeedDomain(), (substate) => substate.news);
//# sourceMappingURL=selectors.js.map