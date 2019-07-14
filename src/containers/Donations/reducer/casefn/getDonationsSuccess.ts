import { IDonationsInitialState } from '..';
import { IDonationActions } from 'containers/Donations/types/actions';

const getDonationsSuccessCaseFn = (
  state: IDonationsInitialState,
  action: IDonationActions.GetDonations['Success']
): IDonationsInitialState => {
  const uuid = action.data.reduce((memo: IDonationsInitialState['uuid'], donation) => {
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
    donations: action.data
  };
};

export default getDonationsSuccessCaseFn;