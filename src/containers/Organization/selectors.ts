import { createSelector } from 'reselect';
import { IReduxState } from 'redux/reducers';
import { selectContactDomain } from 'containers/Contact/selectors';

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

export const makeSelectContactOrganizations = () => createSelector(
  selectContactDomain(),
  selectOrganizationDomain(),
  (contactSubstate, orgSubstate): IOrganization[] => {
    return contactSubstate.organizations.map((org: IOrganization) => {
      return orgSubstate.uuid[org.uuid];
    });
  }
);
