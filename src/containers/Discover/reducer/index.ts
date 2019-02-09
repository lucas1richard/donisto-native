import DiscoverConstants from '../constants';
import { TDiscoverActions } from '../actions';

const initialState = {};

function discoverReducer(state = initialState, action: TDiscoverActions) {
  switch (action.type) {
    case DiscoverConstants.DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default discoverReducer;
