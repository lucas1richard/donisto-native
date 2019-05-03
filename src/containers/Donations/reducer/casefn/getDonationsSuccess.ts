import { IDonationsInitialState } from '..';
import { IGetDonationsSuccessAction } from 'containers/Donations/actions';

const getDonationsSuccessCaseFn = (
  state: IDonationsInitialState,
  action: IGetDonationsSuccessAction
): IDonationsInitialState => {
  const uuid = action.donations.reduce((memo, donation) => {
    memo[donation.uuid] = donation;
    return memo;
  }, {});

  return {
    ...state,
    uuid,
    ui: {
      ...state.ui,
      loaded: true
    },
    donations: action.donations
  };
};

export default getDonationsSuccessCaseFn;