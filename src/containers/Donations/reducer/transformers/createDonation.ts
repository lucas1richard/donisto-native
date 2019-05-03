import { IDonationsInitialState } from '..';
import { ICreateDonationAction } from 'containers/Donations/actions';

const createDonationTransformer = (
  state: IDonationsInitialState,
  action: ICreateDonationAction
) => {
  return state;
};

export default createDonationTransformer;