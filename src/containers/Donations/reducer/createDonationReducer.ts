import { TDonationsActions } from '../actions';
import DonationsConstants from '../constants';

export interface ICreateDonationReduxState {
  selectedCause: string;
  ui: {
    status: string;
  }
}

export const createDonationInitialState: ICreateDonationReduxState = {
  selectedCause: '',
  ui: {
    status: '',
  },
};

const createDonationReducer = (state = createDonationInitialState, action: TDonationsActions) => {
  switch (action.type) {
    case DonationsConstants.CREATE_DONATION:
      return {
        ...state,
        ui: {
          status: 'submitting'
        }
      };
    case DonationsConstants.SELECT_CAUSE:
      return {
        ...state,
        selectedCause: action.causeUuid,
        ui: {
          ...state.ui
        }
      };
    default:
      return state;
  }
};

export default createDonationReducer;