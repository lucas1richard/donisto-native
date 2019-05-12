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
  | IToggleNewsFeedSelectAction
  | ISelectOrgCreateCauseAction
;

interface ICreateCauseAction {
  type: CauseConstants.CREATE_CAUSE_ACTION
}

export const createCauseAction = (): ICreateCauseAction => ({
  type: CauseConstants.CREATE_CAUSE_ACTION
});

interface ICreateCauseFailAction {
  type: CauseConstants.CREATE_CAUSE_FAIL_ACTION,
  error: any
}

export const createCauseFailAction = (error: any): ICreateCauseFailAction => ({
  type: CauseConstants.CREATE_CAUSE_FAIL_ACTION,
  error
});

interface ICreateCauseSuccessAction {
  type: CauseConstants.CREATE_CAUSE_SUCCESS_ACTION,
  cause: any
}

export const createCauseSuccessAction = (cause: any): ICreateCauseSuccessAction => ({
  type: CauseConstants.CREATE_CAUSE_SUCCESS_ACTION,
  cause
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

interface IGetCauseAction {
  type: CauseConstants.GET_CAUSE_ACTION
}

export const getCauseAction = (): IGetCauseAction => ({
  type: CauseConstants.GET_CAUSE_ACTION
});

interface IGetCauseFailAction {
  type: CauseConstants.GET_CAUSE_FAIL_ACTION,
  error: any
}

export const getCauseFailAction = (error: any): IGetCauseFailAction => ({
  type: CauseConstants.GET_CAUSE_FAIL_ACTION,
  error
});

interface IGetCauseSuccessAction {
  type: CauseConstants.GET_CAUSE_SUCCESS_ACTION,
  cause: any
}

export const getCauseSuccessAction = (cause: any): IGetCauseSuccessAction => ({
  type: CauseConstants.GET_CAUSE_SUCCESS_ACTION,
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
