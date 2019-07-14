import ContactConstants from '../constants';

export namespace IContactActions {
  export interface GetContact extends DonistoAction<
    ContactConstants.GET_CONTACT,
    ContactConstants.GET_CONTACT_FAIL,
    ContactConstants.GET_CONTACT_SUCCESS,
    IContact.Default
  > {}
  export interface UpdateContact extends DonistoAction<
    ContactConstants.UPDATE_CONTACT,
    ContactConstants.UPDATE_CONTACT_FAIL,
    ContactConstants.UPDATE_CONTACT_SUCCESS,
    IContact.Default
  > {}
  export interface GetOrgNewsFeed extends DonistoAction<
    ContactConstants.GET_ORG_NEWS_FEED,
    ContactConstants.GET_ORG_NEWS_FEED_FAIL,
    ContactConstants.GET_ORG_NEWS_FEED_SUCCESS,
    any
  > {}
}

export namespace IContactActionCreators {
  export interface GetContact extends DonistoActionCreators<
    IContactActions.GetContact['Default'],
    IContactActions.GetContact['Fail'],
    IContactActions.GetContact['Success'],
    IContact.Default
  > {}
  export interface UpdateContact extends DonistoActionCreators<
    IContactActions.UpdateContact['Default'],
    IContactActions.UpdateContact['Fail'],
    IContactActions.UpdateContact['Success'],
    IContact.Default
  > {}
  export interface GetOrgNewsFeed extends DonistoActionCreators<
    IContactActions.GetOrgNewsFeed['Default'],
    IContactActions.GetOrgNewsFeed['Fail'],
    IContactActions.GetOrgNewsFeed['Success'],
    any
  > {}
}