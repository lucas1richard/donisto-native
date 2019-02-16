import { createSelector } from 'reselect';

export const selectMessagesDomain = () => (state: any) => state.messages;

export const makeSelectMessages = () => createSelector(
  selectMessagesDomain(),
  (substate) => substate
);
