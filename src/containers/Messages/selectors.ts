import { createSelector } from 'reselect';

export const selectMessagesDomain = () => (state) => state.messages;

export const makeSelectMessages = () => createSelector(
  selectMessagesDomain(),
  (substate) => substate
);
