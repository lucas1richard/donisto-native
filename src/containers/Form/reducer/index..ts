import FormConstants from '../constants';
import { TFormActions } from '../actions';

const initialState = {};

function formReducer(state = initialState, action: TFormActions) {
  switch (action.type) {
    case FormConstants.DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default formReducer;
