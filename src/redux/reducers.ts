/*
 * reducer js
 * Combine the reducers to pass into the store
 */

import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

import contact from 'containers/Contact/reducer';
import newsfeed, { INewsfeedInitialState } from 'containers/NewsFeed/reducer';
import donations, { IDonationsInitialState } from 'containers/Donations/reducer';
import discover from 'containers/Discover/reducer';
import messages from 'containers/Messages/reducer';
import cause, { ICauseInitialState } from 'containers/Cause/reducer';
import organization, { IOrganizationInitialState } from 'containers/Organization/reducer';
import createNewsStory, { ICreateStoryReduxState } from 'containers/Organization/containers/CreateNewsStory/reducer';

export interface IReduxState {
  contact: any;
  donations: IDonationsInitialState;
  discover: any;
  form: any;
  cause: ICauseInitialState;
  messages: any;
  organization: IOrganizationInitialState;
  newsfeed: INewsfeedInitialState;
  createNewsStory: ICreateStoryReduxState
}

/** To be combined below */
const reducers = {
  contact,
  donations,
  discover,
  form,
  messages,
  cause,
  organization,
  newsfeed,
  createNewsStory
};

const combinedReducers = combineReducers(reducers);

export const initialState = {
};

export default combinedReducers;
