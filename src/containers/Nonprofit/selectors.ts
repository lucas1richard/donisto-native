import { createSelector } from 'reselect';

export const selectNonprofitDomain = () => (state: any) => state.nonprofit;

export const makeSelectNonprofit = () => createSelector(
  selectNonprofitDomain(),
  (substate) => substate
);
