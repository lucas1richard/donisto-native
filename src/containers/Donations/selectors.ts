import { createSelector } from 'reselect';
import { IDonationsInitialState } from './reducer';
import { IReduxState } from 'redux/reducers';
import { ICreateDonationReduxState } from './reducer/createDonationReducer';
import { makeSelectCauses } from 'containers/Cause/selectors';

export const selectDonationsDomain = () => (state: IReduxState): IDonationsInitialState => state.donations;
export const selectCreateDonationsDomain = () => (state: IReduxState): ICreateDonationReduxState => state.donations.createDonation;

export const makeSelectDonations = () => createSelector(
  selectDonationsDomain(),
  (substate) => substate.donations
);

export const makeSelectUi = () => createSelector(
  selectDonationsDomain(),
  (substate) => substate.ui
);

export const makeSelectUuid = () => createSelector(
  selectDonationsDomain(),
  (substate) => substate.uuid
);

export const makeSelectCreateDonationsUi = () => createSelector(
  selectCreateDonationsDomain(),
  (substate) => substate.ui
);

export const makeSelectCreateDonationsCause = () => createSelector(
  selectCreateDonationsDomain(),
  (substate) => substate.selectedCause
);

export const makeSelectDonationDetail = () => createSelector(
  makeSelectUi(),
  makeSelectUuid(),
  makeSelectCauses(),
  (ui, uuid, causes) => {
    const donation = uuid[ui.viewDonation];
    const cause = causes[donation.cause_uuid];
    return {
      ...donation,
      cause
    };
  }
);
