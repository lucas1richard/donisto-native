import { createSelector } from 'reselect';

export const selectCreateNewsStoryDomain = () => (state: any) => state.createNewsStory;

export const makeSelectCreateNewsStory = () => createSelector(
  selectCreateNewsStoryDomain(),
  (substate) => substate
);
