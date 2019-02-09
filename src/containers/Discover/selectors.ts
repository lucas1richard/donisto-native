import { createSelector } from 'reselect';

export const selectDiscoverDomain = () => (state) => state.discover;

export const makeSelectDiscover = () => createSelector(
  selectDiscoverDomain(),
  (substate) => substate
);
