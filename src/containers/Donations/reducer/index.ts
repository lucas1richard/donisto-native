import DonationsConstants from '../constants';
import { TDonationsActions } from '../actions';

export interface IDonation {}

export interface IDonationsInitialState {
  ui: {
    loaded: boolean;
  };
  donations: IDonation[],
  error: any
}

const initialState: IDonationsInitialState = {
  ui: {
    loaded: false
  },
  donations: [],
  error: undefined
};

function donationsReducer(state = initialState, action: TDonationsActions) {
  switch (action.type) {
    case DonationsConstants.GET_DONATIONS:
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: false
        }
      };
    case DonationsConstants.GET_DONATIONS_SUCCESS:
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: true
        },
        donations: action.donations
      };
    case DonationsConstants.GET_DONATIONS_FAIL:
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: true
        },
        error: action.error
      };
    default:
      return state;
  }
}

export default donationsReducer;
