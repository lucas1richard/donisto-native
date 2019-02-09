import { createSelector } from 'reselect';

/**
 * Direct selector to the donations state domain
 */
const selectDonationsDomain = () => (state: any) => state.donations;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Donations
 */

const makeSelectDonations = () => createSelector(
  selectDonationsDomain(),
  (substate) => substate
);

export default makeSelectDonations;
export {
  selectDonationsDomain
};
