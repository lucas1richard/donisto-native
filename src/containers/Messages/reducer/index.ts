import MessagesConstants from '../constants';
import { TMessagesActions } from '../actions';

const initialState = {};

function messagesReducer(state = initialState, action: TMessagesActions) {
  switch (action.type) {
    case MessagesConstants.DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default messagesReducer;
