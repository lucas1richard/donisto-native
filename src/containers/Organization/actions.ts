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
;

interface IDefaultAction {
  type: OrganizationConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: OrganizationConstants.DEFAULT_ACTION
});

interface IRegisterOrgAction {
  type: OrganizationConstants.REGISTER_ORG;
}

export const registerOrgAction = (): IRegisterOrgAction => ({
  type: OrganizationConstants.REGISTER_ORG
});

interface IRegisterOrgSuccessAction {
  type: OrganizationConstants.REGISTER_ORG_SUCCESS;
  organization: any;
}

export const registerOrgActionSuccess = (organization: any): IRegisterOrgSuccessAction => ({
  type: OrganizationConstants.REGISTER_ORG_SUCCESS,
  organization
});

interface IRegisterOrgFailAction {
  type: OrganizationConstants.REGISTER_ORG_FAIL;
  error: any;
}

export const registerOrgFailAction = (error: any): IRegisterOrgFailAction => ({
  type: OrganizationConstants.REGISTER_ORG_FAIL,
  error
});

////////////////////////////////////////////////////////////////////////////////

interface IGetOrgAction {
  type: OrganizationConstants.GET_ORG;
}

export const getOrgAction = (): IGetOrgAction => ({
  type: OrganizationConstants.GET_ORG
});

interface IGetOrgSuccessAction {
  type: OrganizationConstants.GET_ORG_SUCCESS;
  organization: any;
}

export const getOrgActionSuccess = (organization: any): IGetOrgSuccessAction => ({
  type: OrganizationConstants.GET_ORG_SUCCESS,
  organization
});

interface IGetOrgFailAction {
  type: OrganizationConstants.GET_ORG_FAIL;
  error: any;
}

export const getOrgFailAction = (error: any): IGetOrgFailAction => ({
  type: OrganizationConstants.GET_ORG_FAIL,
  error
});