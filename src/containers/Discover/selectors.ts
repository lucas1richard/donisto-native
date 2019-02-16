import { createSelector } from 'reselect';

export const selectDiscoverDomain = () => (state: any) => state.discover;

export const makeSelectDiscover = () => createSelector(
  selectDiscoverDomain(),
  (substate) => substate
);
