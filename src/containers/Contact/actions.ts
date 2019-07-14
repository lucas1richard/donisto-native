import ContactConstants from "./constants";
import { IContactActions, IContactActionCreators } from './types/actions';

export type TContactActions =
  IContactActions.GetContact['Default']
  | IContactActions.GetContact['Fail']
  | IContactActions.GetContact['Success']
  | IContactActions.UpdateContact['Default']
  | IContactActions.UpdateContact['Fail']
  | IContactActions.UpdateContact['Success']
  | IContactActions.GetOrgNewsFeed['Default']
  | IContactActions.GetOrgNewsFeed['Fail']
  | IContactActions.GetOrgNewsFeed['Success']
;

export const getContactAction: IContactActionCreators.GetContact = {
  Default: () => ({
    type: ContactConstants.GET_CONTACT
  }),
  Fail: (error) => ({
    type: ContactConstants.GET_CONTACT_FAIL,
    error
  }),
  Success: (data) => ({
    type: ContactConstants.GET_CONTACT_SUCCESS,
    data
  })
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const updateContactAction: IContactActionCreators.UpdateContact = {
  Default: () => ({
    type: ContactConstants.UPDATE_CONTACT,
  }),
  Fail: (error) => ({
    type: ContactConstants.UPDATE_CONTACT_FAIL,
    error,
  }),
  Success: (data) => ({
    type: ContactConstants.UPDATE_CONTACT_SUCCESS,
    data,
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const getOrgNewsFeedAction: IContactActionCreators.GetOrgNewsFeed = {
  Default: () => ({
    type: ContactConstants.GET_ORG_NEWS_FEED,
  }),
  Fail: (error) => ({
    type: ContactConstants.GET_ORG_NEWS_FEED_FAIL,
    error,
  }),
  Success: (data) => ({
    type: ContactConstants.GET_ORG_NEWS_FEED_SUCCESS,
    data
  }),
};
