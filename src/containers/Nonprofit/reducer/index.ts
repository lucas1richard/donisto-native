import NonprofitConstants from '../constants';
import { TNonprofitActions } from '../actions';

const initialState = {};

function nonprofitReducer(state = initialState, action: TNonprofitActions) {
  switch (action.type) {
    case NonprofitConstants.DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default nonprofitReducer;
