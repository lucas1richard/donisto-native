import { createSelector } from 'reselect';

export const selectContactDomain = () => (state: any) => state.contact;

export const makeSelectContact = () => createSelector(
  selectContactDomain(),
  (substate): IContact.Default => substate
);

export const makeSelectOrganizationUuid = () => createSelector(
  selectContactDomain(),
  (substate) => substate.organization_uuid
);

export const makeSelectOrgNewsFeed = () => createSelector(
  selectContactDomain(),
  (substate) => substate.orgNewsFeed || []
);
