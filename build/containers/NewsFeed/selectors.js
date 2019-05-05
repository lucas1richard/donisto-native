import { newsfeedInitialState } from "./reducer";
import { createSelector } from "reselect";
export const selectNewsFeedDomain = () => (state) => state.newsfeed || newsfeedInitialState;
export const makeSelectLoaded = () => createSelector(selectNewsFeedDomain(), (substate) => substate.ui.loaded);
export const makeSelectNewsFeed = () => createSelector(selectNewsFeedDomain(), (substate) => substate.news);
export const makeSelectDetailItem = () => createSelector(selectNewsFeedDomain(), (substate) => substate.uuid[substate.ui.detailIx]);
export const makeSelectSelectedCauses = () => createSelector(selectNewsFeedDomain(), (substate) => substate.selectedCauses);
//# sourceMappingURL=selectors.js.map