import { createSelector } from 'reselect';

export const selectOrganizationDomain = () => (state: any) => state.organization;

export const makeSelectOrganization = () => createSelector(
  selectOrganizationDomain(),
  (substate) => substate
);
