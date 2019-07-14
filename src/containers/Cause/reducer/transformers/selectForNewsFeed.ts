import { ICauseInitialState } from '..';
import { ICauseActions } from 'containers/Cause/types/actions';

export type SelectForNewsFeedCaseFn = DonistoCaseFn<
  ICauseInitialState,
  ICauseActions.ToggleNewsFeedSelect
>;

const selectForNewsFeedCaseFn: SelectForNewsFeedCaseFn = (state, action) => {
  const selectedCauses = { ...state.selectedForNewsFeed };

  if (selectedCauses[action.uuid]) {
    delete selectedCauses[action.uuid];
  } else {
    selectedCauses[action.uuid] = true;
  }

  return {
    ...state,
    ui: { ...state.ui },
    selectedForNewsFeed: selectedCauses
  };
};

export default selectForNewsFeedCaseFn;