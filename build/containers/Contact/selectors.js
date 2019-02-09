import { createSelector } from 'reselect';
export const selectContactDomain = () => (state) => state.contact;
export const makeSelectContact = () => createSelector(selectContactDomain(), (substate) => substate);
//# sourceMappingURL=selectors.js.map