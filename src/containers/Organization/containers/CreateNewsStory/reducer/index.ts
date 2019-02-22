import CreateNewsStoryConstants from '../constants';
import { TCreateNewsStoryActions } from '../actions';

const initialState = {};

function createNewsStoryReducer(state = initialState, action: TCreateNewsStoryActions) {
  switch (action.type) {
    case CreateNewsStoryConstants.DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default createNewsStoryReducer;
