/*
 *
 * Organization actions
 *
 */

import OrganizationConstants from './constants';

export type TOrganizationActions =
  IRegisterOrgAction
  | IRegisterOrgSuccessAction
  | IRegisterOrgFailAction
  | IGetOrgAction
  | IGetOrgSuccessAction
  | IGetOrgFailAction
  | IUpdateOrgAction
  | IUpdateOrgSuccessAction
  | IUpdateOrgFailAction
  | IGetOrgDetailAction
  | IGetOrgDetailSuccessAction
  | IGetOrgDetailFailAction
  | ISelectOrgDetailAction
;

export interface IDefaultAction {
  type: OrganizationConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: OrganizationConstants.DEFAULT_ACTION
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IRegisterOrgAction {
  type: OrganizationConstants.REGISTER_ORG;
}

export const registerOrgAction = (): IRegisterOrgAction => ({
  type: OrganizationConstants.REGISTER_ORG
});

export interface IRegisterOrgSuccessAction {
  type: OrganizationConstants.REGISTER_ORG_SUCCESS;
  organization: any;
}

export const registerOrgActionSuccess = (organization: any): IRegisterOrgSuccessAction => ({
  type: OrganizationConstants.REGISTER_ORG_SUCCESS,
  organization
});

export interface IRegisterOrgFailAction {
  type: OrganizationConstants.REGISTER_ORG_FAIL;
  error: any;
}

export const registerOrgFailAction = (error: any): IRegisterOrgFailAction => ({
  type: OrganizationConstants.REGISTER_ORG_FAIL,
  error
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IGetOrgAction {
  type: OrganizationConstants.GET_ORG;
}

export const getOrgAction = (): IGetOrgAction => ({
  type: OrganizationConstants.GET_ORG
});

export interface IGetOrgSuccessAction {
  type: OrganizationConstants.GET_ORG_SUCCESS;
  organization: any[];
}

export const getOrgActionSuccess = (organization: any): IGetOrgSuccessAction => ({
  type: OrganizationConstants.GET_ORG_SUCCESS,
  organization
});

export interface IGetOrgFailAction {
  type: OrganizationConstants.GET_ORG_FAIL;
  error: any;
}

export const getOrgFailAction = (error: any): IGetOrgFailAction => ({
  type: OrganizationConstants.GET_ORG_FAIL,
  error
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IGetOrgDetailAction {
  type: OrganizationConstants.GET_ORG_DETAIL;
}

export const getOrgDetailAction = (): IGetOrgDetailAction => ({
  type: OrganizationConstants.GET_ORG_DETAIL
});

export interface IGetOrgDetailSuccessAction {
  type: OrganizationConstants.GET_ORG_DETAIL_SUCCESS;
  organization: IOrganization;
}

export const getOrgDetailActionSuccess = (organization: IOrganization): IGetOrgDetailSuccessAction => ({
  type: OrganizationConstants.GET_ORG_DETAIL_SUCCESS,
  organization
});

export interface IGetOrgDetailFailAction {
  type: OrganizationConstants.GET_ORG_DETAIL_FAIL;
  error: any;
}

export const getOrgDetailFailAction = (error: any): IGetOrgDetailFailAction => ({
  type: OrganizationConstants.GET_ORG_DETAIL_FAIL,
  error
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface ISelectOrgDetailAction {
  type: OrganizationConstants.SELECT_DETAIL;
  uuid: string;
}

export const selectOrgDetailAction = (uuid: string): ISelectOrgDetailAction => ({
  type: OrganizationConstants.SELECT_DETAIL,
  uuid
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IUpdateOrgAction {
  type: OrganizationConstants.UPDATE_ORG;
  onComplete: () => any;
}

export const updateOrgAction = (onComplete: () => any): IUpdateOrgAction => ({
  type: OrganizationConstants.UPDATE_ORG,
  onComplete
});

export interface IUpdateOrgSuccessAction {
  type: OrganizationConstants.UPDATE_ORG_SUCCESS;
  organization: IOrganization;
}

export const updateOrgActionSuccess = (organization: IOrganization): IUpdateOrgSuccessAction => ({
  type: OrganizationConstants.UPDATE_ORG_SUCCESS,
  organization
});

export interface IUpdateOrgFailAction {
  type: OrganizationConstants.UPDATE_ORG_FAIL;
  error: any;
}

export const updateOrgFailAction = (error: any): IUpdateOrgFailAction => ({
  type: OrganizationConstants.UPDATE_ORG_FAIL,
  error
});