import DonationsConstants from '../constants';
import { TDonationsActions } from '../actions';
import createDonationReducer, {
  createDonationInitialState,
  ICreateDonationReduxState
} from './createDonationReducer';
import getDonationsSuccessCaseFn from './casefn/getDonationsSuccess';

export interface IDonationsInitialState {
  ui: {
    loaded: boolean;
    viewDonation: string;
  };
  uuid: { [x: string]: IDonation};
  createDonation: ICreateDonationReduxState;
  donations: IDonation[];
  error: any;
}

const initialState: IDonationsInitialState = {
  ui: {
    loaded: false,
    viewDonation: ''
  },
  uuid: {},
  createDonation: createDonationInitialState,
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
      return getDonationsSuccessCaseFn(state, action);

    case DonationsConstants.GET_DONATIONS_FAIL:
      return {
        ...state,
        ui: {
          ...state.ui,
          loaded: true
        },
        error: action.error
      };

    case DonationsConstants.SELECT_DETAIL_VIEW:
      return {
        ...state,
        ui: {
          ...state.ui,
          viewDonation: action.donationUuid
        }
      };
    case DonationsConstants.CREATE_DONATION:
      return {
        ...state,
        createDonation: createDonationReducer(state.createDonation, action)
      };
    case DonationsConstants.CREATE_DONATION_SUCCESS:
      return {
        ...state,
        createDonation: createDonationReducer(state.createDonation, action)
      };
    case DonationsConstants.CREATE_DONATION_FAIL:
      return {
        ...state,
        createDonation: createDonationReducer(state.createDonation, action)
      };
    case DonationsConstants.SELECT_CAUSE:
      return {
        ...state,
        createDonation: createDonationReducer(state.createDonation, action)
      };
    default:
      return state;
  }
}

export default donationsReducer;
