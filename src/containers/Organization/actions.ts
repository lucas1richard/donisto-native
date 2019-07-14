/*
 *
 * Organization actions
 *
 */

import OrganizationConstants from './constants';
import { IOrganizationActionCreators, IOrganizationActions } from './types/actions';

export type TOrganizationActions =
IOrganizationActions.RegisterOrg['Default']
  | IOrganizationActions.RegisterOrg['Fail']
  | IOrganizationActions.RegisterOrg['Success']
  | IOrganizationActions.GetOrg['Default']
  | IOrganizationActions.GetOrg['Fail']
  | IOrganizationActions.GetOrg['Success']
  | IOrganizationActions.UpdateOrg['Default']
  | IOrganizationActions.UpdateOrg['Fail']
  | IOrganizationActions.UpdateOrg['Success']
  | IOrganizationActions.UpdateOrg['WithCallBack']
  | IOrganizationActions.GetOrgDetail['Default']
  | IOrganizationActions.GetOrgDetail['Fail']
  | IOrganizationActions.GetOrgDetail['Success']
  | IOrganizationActions.SelectOrgDetail['WithUuid']
  | IOrganizationActions.CreateOrgLinks['Default']
  | IOrganizationActions.CreateOrgLinks['Fail']
  | IOrganizationActions.CreateOrgLinks['Success']
  | IOrganizationActions.DeleteOrgLinks['Default']
  | IOrganizationActions.DeleteOrgLinks['Fail']
  | IOrganizationActions.DeleteOrgLinks['Success']
  | IOrganizationActions.GetDiscoverOrgs['Default']
  | IOrganizationActions.GetDiscoverOrgs['Fail']
  | IOrganizationActions.GetDiscoverOrgs['Success']
  | IOrganizationActions.SelectOrgCauseDetail['WithUuid']
  | IOrganizationActions.FollowOrg['Default']
  | IOrganizationActions.FollowOrg['WithUuid']
  | IOrganizationActions.FollowOrg['Fail']
  | IOrganizationActions.FollowOrg['Success']
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

export const registerOrgAction: IOrganizationActionCreators.RegisterOrg = {
  Default: () => ({
    type: OrganizationConstants.REGISTER_ORG
  }),
  Fail: (error) => ({
    type: OrganizationConstants.REGISTER_ORG_FAIL,
    error
  }),
  Success: (data) => ({
    type: OrganizationConstants.REGISTER_ORG_SUCCESS,
    data
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const getOrgAction: IOrganizationActionCreators.GetOrg = {
  Default: () => ({
    type: OrganizationConstants.GET_ORG
  }),
  Fail: (error) => ({
    type: OrganizationConstants.GET_ORG_FAIL,
    error
  }),
  Success: (data) => ({
    type: OrganizationConstants.GET_ORG_SUCCESS,
    data
  })
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const getOrgDetailAction: IOrganizationActionCreators.GetOrgDetail = {
  Default: () => ({
    type: OrganizationConstants.GET_ORG_DETAIL,
  }),
  Fail: (error) => ({
    type: OrganizationConstants.GET_ORG_DETAIL_FAIL,
    error,
  }),
  Success: (data) => ({
    type: OrganizationConstants.GET_ORG_DETAIL_SUCCESS,
    data,
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const selectOrgDetailAction: IOrganizationActionCreators.SelectOrgDetail = {
  WithUuid: (uuid) => ({
    type: OrganizationConstants.SELECT_DETAIL,
    uuid
  })
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const selectOrgCauseDetailAction: IOrganizationActionCreators.SelectOrgCauseDetail = {
  WithUuid: (uuid) => ({
    type: OrganizationConstants.SELECT_DETAIL_CAUSE,
    uuid
  })
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const updateOrgAction: IOrganizationActionCreators.UpdateOrg = {
  Default: () => ({
    type: OrganizationConstants.UPDATE_ORG,
  }),
  WithCallBack: (onComplete) => ({
    type: OrganizationConstants.UPDATE_ORG,
    onComplete
  }),
  Fail: (error) => ({
    type: OrganizationConstants.UPDATE_ORG_FAIL,
    error
  }),
  Success: (data) => ({
    type: OrganizationConstants.UPDATE_ORG_SUCCESS,
    data
  })
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const createOrgLinksAction: IOrganizationActionCreators.CreateOrgLinks = {
  Default: () => ({
    type: OrganizationConstants.CREATE_ORG_LINKS,
  }),
  Fail: (error) => ({
    type: OrganizationConstants.CREATE_ORG_LINKS_FAIL,
    error
  }),
  Success: (data) => ({
    type: OrganizationConstants.CREATE_ORG_LINKS_SUCCESS,
    data
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const deleteOrgLinksAction: IOrganizationActionCreators.DeleteOrgLinks = {
  Default: () => ({
    type: OrganizationConstants.DELETE_ORG_LINKS,
  }),
  WithLinks: (links, orgUuid) => ({
    type: OrganizationConstants.DELETE_ORG_LINKS,
    links,
    orgUuid,
  }),
  Fail: (error) => ({
    type: OrganizationConstants.DELETE_ORG_LINKS_FAIL,
    error,
  }),
  Success: (data) => ({
    type: OrganizationConstants.DELETE_ORG_LINKS_SUCCESS,
    data,
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const getDiscoverOrgs: IOrganizationActionCreators.GetDiscoverOrgs = {
  Default: () => ({
    type: OrganizationConstants.GET_DISCOVER_ORGS,
  }),
  Fail: (error) => ({
    type: OrganizationConstants.GET_DISCOVER_ORGS_FAIL,
    error,
  }),
  Success: (data) => ({
    type: OrganizationConstants.GET_DISCOVER_ORGS_SUCCESS,
    data,
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const followOrgAction: IOrganizationActionCreators.FollowOrg = {
  Default: () => ({
    type: OrganizationConstants.FOLLOW_ORGANIZATION,
  }),
  WithUuid: (org_uuid) => ({
    type: OrganizationConstants.FOLLOW_ORGANIZATION,
    org_uuid,
  }),
  Fail: (error) => ({
    type: OrganizationConstants.FOLLOW_ORGANIZATION_FAIL,
    error,
  }),
  Success: (data) => ({
    type: OrganizationConstants.FOLLOW_ORGANIZATION_SUCCESS,
    data,
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const rejectFollowOrg: IOrganizationActionCreators.RejectFollowOrg = {
  Default: () => ({
    type: OrganizationConstants.REJECT_FOLLOW_ORGANIZATION,
  }),
  WithUuid: (org_uuid) => ({
    type: OrganizationConstants.REJECT_FOLLOW_ORGANIZATION,
    org_uuid,
  }),
  Fail: (error) => ({
    type: OrganizationConstants.REJECT_FOLLOW_ORGANIZATION_FAIL,
    error,
  }),
  Success: (data) => ({
    type: OrganizationConstants.REJECT_FOLLOW_ORGANIZATION_SUCCESS,
    data,
  })
};
