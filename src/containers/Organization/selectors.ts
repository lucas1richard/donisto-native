import { createSelector } from 'reselect';
import { IReduxState } from 'redux/reducers';

export const selectOrganizationDomain = () => (state: IReduxState) => state.organization;

export const makeSelectOrganization = () => createSelector(
  selectOrganizationDomain(),
  (substate) => substate
);

export const makeSelectOrganizations = () => createSelector(
  selectOrganizationDomain(),
  (substate) => substate.organizations
);

export const makeSelectActiveOrganization = () => createSelector(
  selectOrganizationDomain(),
  (substate) => substate.organizations[substate.ix]
);

export const makeSelectDetailOrganization = () => createSelector(
  selectOrganizationDomain(),
  (substate) => substate.uuid[substate.ui.detailUuid]
);
