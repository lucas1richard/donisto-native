import { createSelector } from 'reselect';

export const selectContactDomain = () => (state: any) => state.contact;

export const makeSelectContact = () => createSelector(
  selectContactDomain(),
  (substate): ContactAttributes => substate
);
