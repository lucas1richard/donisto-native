import { createSelector } from 'reselect';
import { IReduxState } from 'redux/reducers';
import { selectContactDomain } from 'containers/Contact/selectors';
import { selectCauseDomain } from 'containers/Cause/selectors';

export const selectOrganizationDomain = () => (state: IReduxState) => state.organization;

export const makeSelectOrganization = () => createSelector(
  selectOrganizationDomain(),
  (substate) => substate
);

export const makeSelectDiscoverOrgsLoaded = () => createSelector(
  selectOrganizationDomain(),
  (substate) => substate.ui.discoverOrgsLoaded
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
  (substate): IOrganization => substate.uuid[substate.ui.detailUuid]
);

export const makeSelectOrgCauseDetail = () => createSelector(
  selectOrganizationDomain(),
  selectCauseDomain(),
  (substate, causeSubstate): ICause => {
    return causeSubstate.causes[substate.ui.detailCauseUuid];
  }
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

export const makeSelectDiscoverOrgs = () => createSelector(
  selectOrganizationDomain(),
  (substate) => substate.discoverOrgs.map((uuid) => substate.uuid[uuid])
);
