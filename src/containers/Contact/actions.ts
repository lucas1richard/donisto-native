import ContactConstants from "./constants";
import { Action } from "redux";

export type ContactActions =
  IGetContactAction
  | IGetContactSuccessAction
  | IGetContactFailAction
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
