import { createSelector } from 'reselect';
import { IReduxState } from 'redux/reducers';

export const selectCauseDomain = () => (state: IReduxState) => state.cause;

export const makeSelectCause = () => createSelector(
  selectCauseDomain(),
  (substate) => substate
);

export const makeSelectCauses = () => createSelector(
  selectCauseDomain(),
  (substate) => substate.causes
);

export const makeSelectCausesArray = () => createSelector(
  makeSelectCauses(),
  (causes) => Object.keys(causes).map((key) => causes[key])
);

export const makeSelectSelectedCauses = () => createSelector(
  selectCauseDomain(),
  (substate) => substate.selectedForNewsFeed
);
