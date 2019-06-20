import { newsfeedInitialState } from "./reducer";
import { createSelector } from "reselect";
import { selectOrganizationDomain } from 'containers/Organization/selectors';
export const selectNewsFeedDomain = () => (state) => state.newsfeed || newsfeedInitialState;
export const makeSelectLoaded = () => createSelector(selectNewsFeedDomain(), (substate) => substate.ui.loaded);
export const makeSelectNewsFeed = () => createSelector(selectNewsFeedDomain(), (substate) => substate.news);
export const makeSelectDetailItem = () => createSelector(selectNewsFeedDomain(), (substate) => substate.uuid[substate.ui.detailIx]);
export const makeSelectSelectedCauses = () => createSelector(selectNewsFeedDomain(), (substate) => substate.selectedCauses);
export const makeSelectSelectedOrg = () => createSelector(selectNewsFeedDomain(), selectOrganizationDomain(), (substate, orgSubstate) => orgSubstate.uuid[substate.selectedOrgUuid]);
//# sourceMappingURL=selectors.js.map