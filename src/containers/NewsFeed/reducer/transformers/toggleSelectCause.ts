import { INewsfeedInitialState } from '..';
import { INewsFeedActions } from 'containers/NewsFeed/types/actions';

function toggleSelectCauseTransformer(
  state: INewsfeedInitialState,
  action: INewsFeedActions.ToggleSelectCause['WithUuid']
): INewsfeedInitialState {
  const selectedCauses = {
    ...state.selectedCauses
  };

  if (selectedCauses[action.uuid]) {
    delete selectedCauses[action.uuid];
  } else {
    selectedCauses[action.uuid] = true;
  }
  return {
    ...state,
    selectedCauses,
    ui: {
      ...state.ui
    }
  };
}

export default toggleSelectCauseTransformer;