import ContactConstants from "./constants";
import { Action } from "redux";

export type TContactActions =
  IGetContactAction
  | IGetContactSuccessAction
  | IGetContactFailAction
  | IUpdateContactAction
  | IUpdateContactSuccessAction
  | IUpdateContactFailAction
  | IGetOrgNewsFeedAction
  | IGetOrgNewsFeedSuccessAction
  | IGetOrgNewsFeedFailAction
;

export interface IGetContactAction extends Action<string> {
  type: ContactConstants.GET_CONTACT
}

export const getContactAction = (): IGetContactAction => ({
  type: ContactConstants.GET_CONTACT
});

export interface IGetContactSuccessAction extends Action<string> {
  type: ContactConstants.GET_CONTACT_SUCCESS,
  contact: ContactAttributes
}

export const getContactSuccessAction = (contact: ContactAttributes): IGetContactSuccessAction => ({
  type: ContactConstants.GET_CONTACT_SUCCESS,
  contact
});

export interface IGetContactFailAction extends Action<string> {
  type: ContactConstants.GET_CONTACT_FAIL,
  error: any
}

export const getContactFailAction = (error: any): IGetContactFailAction => ({
  type: ContactConstants.GET_CONTACT_FAIL,
  error
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IUpdateContactAction extends Action<string> {
  type: ContactConstants.UPDATE_CONTACT
}

export const updateContactAction = (): IUpdateContactAction => ({
  type: ContactConstants.UPDATE_CONTACT
});

export interface IUpdateContactSuccessAction extends Action<string> {
  type: ContactConstants.UPDATE_CONTACT_SUCCESS,
  contact: ContactAttributes
}

export const updateContactSuccessAction = (contact: ContactAttributes): IUpdateContactSuccessAction => ({
  type: ContactConstants.UPDATE_CONTACT_SUCCESS,
  contact
});

export interface IUpdateContactFailAction extends Action<string> {
  type: ContactConstants.UPDATE_CONTACT_FAIL,
  error: any
}

export const updateContactFailAction = (error: any): IUpdateContactFailAction => ({
  type: ContactConstants.UPDATE_CONTACT_FAIL,
  error
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IGetOrgNewsFeedAction extends Action<string> {
  type: ContactConstants.GET_ORG_NEWS_FEED
}

export const getOrgNewsFeedAction = (): IGetOrgNewsFeedAction => ({
  type: ContactConstants.GET_ORG_NEWS_FEED
});

export interface IGetOrgNewsFeedSuccessAction extends Action<string> {
  type: ContactConstants.GET_ORG_NEWS_FEED_SUCCESS,
  orgNewsFeed: any
}

export const getOrgNewsFeedSuccessAction = (orgNewsFeed: any): IGetOrgNewsFeedSuccessAction => ({
  type: ContactConstants.GET_ORG_NEWS_FEED_SUCCESS,
  orgNewsFeed
});

export interface IGetOrgNewsFeedFailAction extends Action<string> {
  type: ContactConstants.GET_ORG_NEWS_FEED_FAIL,
  error: any
}

export const getOrgNewsFeedFailAction = (error: any): IGetOrgNewsFeedFailAction => ({
  type: ContactConstants.GET_ORG_NEWS_FEED_FAIL,
  error
});
