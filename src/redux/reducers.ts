/*
 * reducer js
 * Combine the reducers to pass into the store
 */

// import { Record } from 'immutable';
import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

// import actionPlan from 'containers/ActionPlan/reducer';
// import auth from 'containers/Auth/reducer';
// import balances from 'containers/Balances/reducer';
// import drawings from 'containers/Drawings/reducer';
// import contacts from 'containers/Contacts/reducer';
// import changeEmail from 'containers/ChangeEmail/reducer';
// import corePro from 'containers/CorePro/reducer';
// import goals from 'containers/Goals/reducer';
// import googlePlaces from 'containers/AddressFields/reducer';
// import investment from 'containers/Investment/reducer';
// import login from 'containers/Login/reducer';
// import nav from 'containers/Navigation/reducer';
// import navParams from 'containers/Navigation/params-reducer';
// import notifications from 'containers/Notifications/reducer';
// import network from 'containers/NetworkConnection/reducer';
import contact from 'containers/Contact/reducer';
import newsfeed from 'containers/NewsFeed/reducer';
// import profile from 'containers/Profile/reducer';
// import recurringTransfer from 'containers/RecurringTransfer/reducer';
// import register from 'containers/Register/reducer';
// import resetPassword from 'containers/ResetPassword/reducer';
// import smartSave from 'containers/SmartSave/reducer';
// import transfers from 'containers/Transfers/reducer';
// import user from 'containers/User/reducer';
// import launchScreen from 'containers/LaunchScreen/reducer';

/** Setup the initial application state */
// const StateRecord = Record({
//   launch: undefined
// });

/** To be combined below */
const reducers = {
  launch: (state = {}) => state,
  contact,
  // actionPlan,
  // auth,
  // balances,
  // drawings,
  // changeEmail,
  // contacts,
  // corePro,
  form,
  newsfeed
  // goals,
  // googlePlaces,
  // investment,
  // login,
  // nav,
  // navParams,
  // notifications,
  // network,
  // plaid,
  // profile,
  // recurringTransfer,
  // register,
  // resetPassword,
  // smartSave,
  // transfers,
  // user,
  // launchScreen
};

const combinedReducers = combineReducers(reducers);

export const initialState = {
  // launch: {}
};
// export const initialState = new StateRecord();

export default combinedReducers;
