import { createSelector } from 'reselect';
import { IDonationsInitialState } from './reducer';
import { IReduxState } from 'redux/reducers';
import { ICreateDonationReduxState } from './reducer/createDonationReducer';
import { makeSelectCauses, selectCauseDomain } from 'containers/Cause/selectors';
import { selectOrganizationDomain } from 'containers/Organization/selectors';

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
  selectCauseDomain(),
  (donationSubstate, causeSubstate) => causeSubstate.causes[donationSubstate.selectedCause]
);

export const makeSelectDonationsWithCauses = () => createSelector(
  selectDonationsDomain(),
  selectCauseDomain(),
  (donations, causes): IDonationDetail[] => {
    return donations.donations.map((donation) => {
      return {
        ...donation,
        cause: causes.causes[donation.cause_uuid]
      };
    });
  }
);

export const makeSelectDonationDetail = () => createSelector(
  makeSelectUi(),
  makeSelectUuid(),
  makeSelectCauses(),
  selectOrganizationDomain(),
  (ui, uuid, causes, orgs) => {
    const donation = uuid[ui.viewDonation];
    const cause = causes[donation.cause_uuid];
    return {
      ...donation,
      cause,
      organization: orgs.uuid[cause.organization_uuid]
    };
  }
);
