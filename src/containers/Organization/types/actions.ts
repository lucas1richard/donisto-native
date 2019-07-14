import OrganizationConstants from '../constants';

export namespace IOrganizationActions {
  export interface RegisterOrg extends DonistoAction<
    OrganizationConstants.REGISTER_ORG,
    OrganizationConstants.REGISTER_ORG_FAIL,
    OrganizationConstants.REGISTER_ORG_SUCCESS,
    IOrganization.Basic
  > {}
  export interface GetOrg extends DonistoAction<
    OrganizationConstants.GET_ORG,
    OrganizationConstants.GET_ORG_FAIL,
    OrganizationConstants.GET_ORG_SUCCESS,
    IOrganization.Basic[]
  > {}
  export interface GetOrgDetail extends DonistoAction<
    OrganizationConstants.GET_ORG_DETAIL,
    OrganizationConstants.GET_ORG_DETAIL_FAIL,
    OrganizationConstants.GET_ORG_DETAIL_SUCCESS,
    IOrganization.Basic
  > {}
  export interface UpdateOrg extends DonistoAction<
    OrganizationConstants.UPDATE_ORG,
    OrganizationConstants.UPDATE_ORG_FAIL,
    OrganizationConstants.UPDATE_ORG_SUCCESS,
    IOrganization.Basic
  > {
    WithCallBack: {
      type: OrganizationConstants.UPDATE_ORG,
      onComplete: () => any;
    }
  }
  export interface CreateOrgLinks extends DonistoAction<
    OrganizationConstants.CREATE_ORG_LINKS,
    OrganizationConstants.CREATE_ORG_LINKS_FAIL,
    OrganizationConstants.CREATE_ORG_LINKS_SUCCESS,
    IOrganization.Basic
  > {}
  export interface DeleteOrgLinks extends DonistoAction<
    OrganizationConstants.DELETE_ORG_LINKS,
    OrganizationConstants.DELETE_ORG_LINKS_FAIL,
    OrganizationConstants.DELETE_ORG_LINKS_SUCCESS,
    IOrganization.Basic
  > {
    WithLinks: {
      type: OrganizationConstants.DELETE_ORG_LINKS;
      links: string[];
      orgUuid: string;
    }
  }
  export interface GetDiscoverOrgs extends DonistoAction<
    OrganizationConstants.GET_DISCOVER_ORGS,
    OrganizationConstants.GET_DISCOVER_ORGS_FAIL,
    OrganizationConstants.GET_DISCOVER_ORGS_SUCCESS,
    IOrganization.Basic[]
  > {}
  export interface FollowOrg extends DonistoAction<
    OrganizationConstants.FOLLOW_ORGANIZATION,
    OrganizationConstants.FOLLOW_ORGANIZATION_FAIL,
    OrganizationConstants.FOLLOW_ORGANIZATION_SUCCESS,
    IOrganization.Basic
  > {
    WithUuid: {
      org_uuid: string;
      type: OrganizationConstants.FOLLOW_ORGANIZATION;
    }
  }
  export interface RejectFollowOrg extends DonistoAction<
    OrganizationConstants.REJECT_FOLLOW_ORGANIZATION,
    OrganizationConstants.REJECT_FOLLOW_ORGANIZATION_FAIL,
    OrganizationConstants.REJECT_FOLLOW_ORGANIZATION_SUCCESS,
    IOrganization.Basic
  > {
    WithUuid: {
      org_uuid: string;
      type: OrganizationConstants.REJECT_FOLLOW_ORGANIZATION;
    }
  }
  export interface SelectOrgDetail {
    WithUuid: {
      type: OrganizationConstants.SELECT_DETAIL;
      uuid: string;
    }
  }
  export interface SelectOrgCauseDetail {
    WithUuid: {
      type: OrganizationConstants.SELECT_DETAIL_CAUSE;
      uuid: string;
    }
  }
}

export namespace IOrganizationActionCreators {
  export interface RegisterOrg extends DonistoActionCreators<
    IOrganizationActions.RegisterOrg['Default'],
    IOrganizationActions.RegisterOrg['Fail'],
    IOrganizationActions.RegisterOrg['Success'],
    IOrganization.Basic
  > {}
  export interface GetOrg extends DonistoActionCreators<
    IOrganizationActions.GetOrg['Default'],
    IOrganizationActions.GetOrg['Fail'],
    IOrganizationActions.GetOrg['Success'],
    IOrganization.Basic[]
  > {}
  export interface GetOrgDetail extends DonistoActionCreators<
    IOrganizationActions.GetOrgDetail['Default'],
    IOrganizationActions.GetOrgDetail['Fail'],
    IOrganizationActions.GetOrgDetail['Success'],
    IOrganization.Basic
  > {}
  export interface UpdateOrg extends DonistoActionCreators<
  IOrganizationActions.UpdateOrg['Default'],
  IOrganizationActions.UpdateOrg['Fail'],
  IOrganizationActions.UpdateOrg['Success'],
    IOrganization.Basic
  > {
    WithCallBack: (onComplete: () => any) => IOrganizationActions.UpdateOrg['WithCallBack']
  }
  export interface CreateOrgLinks extends DonistoActionCreators<
    IOrganizationActions.CreateOrgLinks['Default'],
    IOrganizationActions.CreateOrgLinks['Fail'],
    IOrganizationActions.CreateOrgLinks['Success'],
    IOrganization.Basic
  > {}
  export interface DeleteOrgLinks extends DonistoActionCreators<
    IOrganizationActions.DeleteOrgLinks['Default'],
    IOrganizationActions.DeleteOrgLinks['Fail'],
    IOrganizationActions.DeleteOrgLinks['Success'],
    IOrganization.Basic
  > {
    WithLinks: (links: string[], orgUuid: string) => IOrganizationActions.DeleteOrgLinks['WithLinks']
  }
  export interface GetDiscoverOrgs extends DonistoActionCreators<
    IOrganizationActions.GetDiscoverOrgs['Default'],
    IOrganizationActions.GetDiscoverOrgs['Fail'],
    IOrganizationActions.GetDiscoverOrgs['Success'],
    IOrganization.Basic[]
  > {}
  export interface FollowOrg extends DonistoActionCreators<
    IOrganizationActions.FollowOrg['Default'],
    IOrganizationActions.FollowOrg['Fail'],
    IOrganizationActions.FollowOrg['Success'],
    IOrganization.Basic
  > {
    WithUuid: (org_uuid: string) => IOrganizationActions.FollowOrg['WithUuid'];
  }
  export interface RejectFollowOrg extends DonistoActionCreators<
    IOrganizationActions.RejectFollowOrg['Default'],
    IOrganizationActions.RejectFollowOrg['Fail'],
    IOrganizationActions.RejectFollowOrg['Success'],
    IOrganization.Basic
  > {
    WithUuid: (org_uuid: string) => IOrganizationActions.RejectFollowOrg['WithUuid'];
  }
  export interface SelectOrgDetail {
    WithUuid: (uuid: string) => IOrganizationActions.SelectOrgDetail['WithUuid']
  }
  export interface SelectOrgCauseDetail {
    WithUuid: (uuid: string) => IOrganizationActions.SelectOrgCauseDetail['WithUuid']
  }
}