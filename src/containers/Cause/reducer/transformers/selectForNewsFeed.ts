import { ICauseInitialState } from '..';
import { IToggleNewsFeedSelectAction } from 'containers/Cause/actions';

function selectForNewsFeedTransformer(state: ICauseInitialState, action: IToggleNewsFeedSelectAction) {
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
}

export default selectForNewsFeedTransformer;