import { createSelector } from 'reselect';
export const selectContactDomain = () => (state) => state.contact;
export const makeSelectContact = () => createSelector(selectContactDomain(), (substate) => substate);
export const makeSelectOrganizationUuid = () => createSelector(selectContactDomain(), (substate) => substate.organization_uuid);
export const makeSelectOrgNewsFeed = () => createSelector(selectContactDomain(), (substate) => substate.orgNewsFeed || []);
//# sourceMappingURL=selectors.js.map