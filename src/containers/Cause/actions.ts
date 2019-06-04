/*
 *
 * Cause actions
 *
 */

import CauseConstants from './constants';

export type TCauseActions =
  ICreateCauseAction
  | ICreateCauseFailAction
  | ICreateCauseSuccessAction
  | IGetCauseAction
  | IGetCauseFailAction
  | IGetCauseSuccessAction
  | IGetCauseDetailAction
  | IGetCauseDetailFailAction
  | IGetCauseDetailSuccessAction
  | IToggleNewsFeedSelectAction
  | ISelectOrgCreateCauseAction
;

export interface ICreateCauseAction {
  type: CauseConstants.CREATE_CAUSE_ACTION
}

export const createCauseAction = (): ICreateCauseAction => ({
  type: CauseConstants.CREATE_CAUSE_ACTION
});

export interface ICreateCauseFailAction {
  type: CauseConstants.CREATE_CAUSE_FAIL_ACTION,
  error: any
}

export const createCauseFailAction = (error: any): ICreateCauseFailAction => ({
  type: CauseConstants.CREATE_CAUSE_FAIL_ACTION,
  error
});

export interface ICreateCauseSuccessAction {
  type: CauseConstants.CREATE_CAUSE_SUCCESS_ACTION,
  cause: ICause[]
}

export const createCauseSuccessAction = (cause: ICause[]): ICreateCauseSuccessAction => ({
  type: CauseConstants.CREATE_CAUSE_SUCCESS_ACTION,
  cause
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export interface IGetCauseAction {
  type: CauseConstants.GET_CAUSE_ACTION
}

export const getCauseAction = (): IGetCauseAction => ({
  type: CauseConstants.GET_CAUSE_ACTION
});

export interface IGetCauseFailAction {
  type: CauseConstants.GET_CAUSE_FAIL_ACTION,
  error: any
}

export const getCauseFailAction = (error: any): IGetCauseFailAction => ({
  type: CauseConstants.GET_CAUSE_FAIL_ACTION,
  error
});

export interface IGetCauseSuccessAction {
  type: CauseConstants.GET_CAUSE_SUCCESS_ACTION,
  cause: ICause[]
}

export const getCauseSuccessAction = (cause: ICause[]): IGetCauseSuccessAction => ({
  type: CauseConstants.GET_CAUSE_SUCCESS_ACTION,
  cause
});
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export interface IGetCauseDetailAction {
  type: CauseConstants.GET_CAUSE_DETAIL_ACTION,
  cause_uuids: string[]
}

export const getCauseDetailAction = (cause_uuids: string[]): IGetCauseDetailAction => ({
  type: CauseConstants.GET_CAUSE_DETAIL_ACTION,
  cause_uuids
});

export interface IGetCauseDetailFailAction {
  type: CauseConstants.GET_CAUSE_DETAIL_FAIL_ACTION,
  error: any
}

export const getCauseDetailFailAction = (error: any): IGetCauseDetailFailAction => ({
  type: CauseConstants.GET_CAUSE_DETAIL_FAIL_ACTION,
  error
});

export interface IGetCauseDetailSuccessAction {
  type: CauseConstants.GET_CAUSE_DETAIL_SUCCESS_ACTION,
  cause: ICause[]
}

export const getCauseDetailSuccessAction = (cause: ICause[]): IGetCauseDetailSuccessAction => ({
  type: CauseConstants.GET_CAUSE_DETAIL_SUCCESS_ACTION,
  cause
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IToggleNewsFeedSelectAction {
  type: CauseConstants.TOGGLE_NEWSFEED_SELECT,
  uuid: string
}

export const toggleNewsFeedSelectAction = (uuid: string): IToggleNewsFeedSelectAction => ({
  type: CauseConstants.TOGGLE_NEWSFEED_SELECT,
  uuid
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface ISelectOrgCreateCauseAction {
  type: CauseConstants.SELECT_ORG_CREATE_CAUSE_ACTION,
  uuid: string
}

export const selectOrgCreateCauseAction = (uuid: string): ISelectOrgCreateCauseAction => ({
  type: CauseConstants.SELECT_ORG_CREATE_CAUSE_ACTION,
  uuid
});
