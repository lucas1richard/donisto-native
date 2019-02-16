import { createSelector } from 'reselect';
import { IDonationsInitialState } from './reducer';
import { IReduxState } from 'redux/reducers';

export const selectDonationsDomain = () => (state: IReduxState): IDonationsInitialState => state.donations;

export const makeSelectDonations = () => createSelector(
  selectDonationsDomain(),
  (substate) => substate.donations
);

export const makeSelectUi = () => createSelector(
  selectDonationsDomain(),
  (substate) => substate.ui
);
