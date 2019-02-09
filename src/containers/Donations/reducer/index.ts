import DonationsConstants from '../constants';
import { TDonationsActions } from '../actions';

const initialState = {};

function donationsReducer(state = initialState, action: TDonationsActions) {
  switch (action.type) {
    case DonationsConstants.DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default donationsReducer;
