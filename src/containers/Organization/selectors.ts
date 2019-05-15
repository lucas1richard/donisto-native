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

export const makeSelectContactOrganizations = (alphabetized?: 'alphabetized') => createSelector(
  selectContactDomain(),
  selectOrganizationDomain(),
  (contactSubstate, orgSubstate): IOrganization[] => {
    const orgArray: IOrganization[] = contactSubstate.organizations.map((org: IOrganization) => {
      return orgSubstate.uuid[org.uuid];
    });
    if (alphabetized) {
      orgArray.sort((aa, bb) => {
        if (aa.name > bb.name) {
          return 1;
        }
        if (aa.name < bb.name) {
          return -1;
        }
        return 0;
      });
    }
    return orgArray;
  }
);
