import { createSelector } from 'reselect';
import { IReduxState } from 'redux/reducers';
import { makeSelectDetailOrganization } from 'containers/Organization/selectors';

export const selectCauseDomain = () => (state: IReduxState) => state.cause;

export const makeSelectCause = () => createSelector(
  selectCauseDomain(),
  (substate) => substate
);

export const makeSelectCauses = () => createSelector(
  selectCauseDomain(),
  (substate) => substate.causes
);

export const makeSelectDetailOrgCauses = () => createSelector(
  makeSelectDetailOrganization(),
  makeSelectCauses(),
  (orgSubstate, causesSubstate) => {
    return (orgSubstate && orgSubstate.causes)
      ? orgSubstate.causes.map(cause => causesSubstate[cause.uuid])
      : [];
  }
);

export const makeSelectCausesArray = () => createSelector(
  makeSelectCauses(),
  (causes) => Object.keys(causes).map((key) => causes[key])
);

export const makeSelectContactCauses = () => createSelector(
  selectCauseDomain(),
  (substate) => substate.contactCauses.map((uuid) => substate.causes[uuid])
);

export const makeSelectSelectedCauses = () => createSelector(
  selectCauseDomain(),
  (substate) => substate.selectedForNewsFeed
);

export const makeSelectCreateCauseOrg = () => createSelector(
  selectCauseDomain(),
  (substate) => substate.ui.createCauseOrg
);
