import { IToggleSelectCauseAction } from 'containers/NewsFeed/actions';
import { INewsfeedInitialState } from '..';

function toggleSelectCauseTransformer(state: INewsfeedInitialState, action: IToggleSelectCauseAction): INewsfeedInitialState {
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