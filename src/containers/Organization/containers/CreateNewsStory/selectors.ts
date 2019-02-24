import { createSelector } from 'reselect';
import { IReduxState } from 'redux/reducers';

export const selectCreateNewsStoryDomain = () => (state: IReduxState) => state.createNewsStory;

export const makeSelectCreateNewsStory = () => createSelector(
  selectCreateNewsStoryDomain(),
  (substate) => substate
);
export const makeSelectCreateNewsStoryStatus = () => createSelector(
  selectCreateNewsStoryDomain(),
  (substate) => substate.ui.status
);
