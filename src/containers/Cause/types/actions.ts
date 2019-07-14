import CauseConstants from '../constants';

export namespace ICauseActions {
  export interface CreateCause extends DonistoAction<
    CauseConstants.CREATE_CAUSE_ACTION,
    CauseConstants.CREATE_CAUSE_FAIL_ACTION,
    CauseConstants.CREATE_CAUSE_SUCCESS_ACTION,
    ICause[]
  > {}
  export interface GetCause extends DonistoAction<
    CauseConstants.GET_CAUSE_ACTION,
    CauseConstants.GET_CAUSE_FAIL_ACTION,
    CauseConstants.GET_CAUSE_SUCCESS_ACTION,
    ICause[]
  > {}
  export interface GetContactCauses extends DonistoAction<
    CauseConstants.GET_CONTACT_CAUSES_ACTION,
    CauseConstants.GET_CONTACT_CAUSES_FAIL_ACTION,
    CauseConstants.GET_CONTACT_CAUSES_SUCCESS_ACTION,
    ICause[]
  > {}
  export interface GetCauseDetailById extends DonistoAction<
    CauseConstants.GET_CAUSE_DETAIL_BY_ID_ACTION,
    CauseConstants.GET_CAUSE_DETAIL_BY_ID_FAIL_ACTION,
    CauseConstants.GET_CAUSE_DETAIL_BY_ID_SUCCESS_ACTION,
    ICause[]
  > {
    WithUuids: {
      type: CauseConstants.GET_CAUSE_DETAIL_BY_ID_ACTION,
      cause_uuids: string[]
    }
  }
  export interface GetCauseDetail extends DonistoAction<
    CauseConstants.GET_CAUSE_DETAIL_ACTION,
    CauseConstants.GET_CAUSE_DETAIL_FAIL_ACTION,
    CauseConstants.GET_CAUSE_DETAIL_SUCCESS_ACTION,
    ICause[]
  > {
    WithUuids: {
      type: CauseConstants.GET_CAUSE_DETAIL_ACTION,
      cause_uuids: string[]
    }
  }
  export interface ToggleNewsFeedSelect {
    type: CauseConstants.TOGGLE_NEWSFEED_SELECT,
    uuid: string
  }
  export interface SelectOrgCreateCause {
    type: CauseConstants.SELECT_ORG_CREATE_CAUSE_ACTION,
    uuid: string
  }
}

export namespace ICauseActionCreators {
  export interface CreateCause extends DonistoActionCreators<
    ICauseActions.CreateCause['Default'],
    ICauseActions.CreateCause['Fail'],
    ICauseActions.CreateCause['Success'],
    ICause[]
  > {}
  export interface GetCause extends DonistoActionCreators<
    ICauseActions.GetCause['Default'],
    ICauseActions.GetCause['Fail'],
    ICauseActions.GetCause['Success'],
    ICause[]
  > {}
  export interface GetContactCauses extends DonistoActionCreators<
    ICauseActions.GetContactCauses['Default'],
    ICauseActions.GetContactCauses['Fail'],
    ICauseActions.GetContactCauses['Success'],
    ICause[]
  > {}
  export interface GetCauseDetailById extends DonistoActionCreators<
    ICauseActions.GetCauseDetailById['Default'],
    ICauseActions.GetCauseDetailById['Fail'],
    ICauseActions.GetCauseDetailById['Success'],
    ICause[]
  > {
    WithUuids: (cause_uuids: string[]) => ICauseActions.GetCauseDetailById['WithUuids']
  }
  export interface GetCauseDetail extends DonistoActionCreators<
    ICauseActions.GetCauseDetail['Default'],
    ICauseActions.GetCauseDetail['Fail'],
    ICauseActions.GetCauseDetail['Success'],
    ICause[]
  > {
    WithUuids: (cause_uuids: string[]) => ICauseActions.GetCauseDetail['WithUuids']
  }
  export interface ToggleNewsFeedSelect {
    (uuid: string): ICauseActions.ToggleNewsFeedSelect;
  }
  export interface SelectOrgCreateCause {
    (uuid: string): ICauseActions.SelectOrgCreateCause;
  }
}

export type TCauseActions =
  ICauseActions.CreateCause['Default']
  | ICauseActions.CreateCause['Fail']
  | ICauseActions.CreateCause['Success']
  | ICauseActions.GetCause['Default']
  | ICauseActions.GetCause['Fail']
  | ICauseActions.GetCause['Success']
  | ICauseActions.GetContactCauses['Default']
  | ICauseActions.GetContactCauses['Fail']
  | ICauseActions.GetContactCauses['Success']
  | ICauseActions.GetCauseDetailById['WithUuids']
  | ICauseActions.GetCauseDetailById['Fail']
  | ICauseActions.GetCauseDetailById['Success']
  | ICauseActions.GetCauseDetail['WithUuids']
  | ICauseActions.GetCauseDetail['Fail']
  | ICauseActions.GetCauseDetail['Success']
  | ICauseActions.ToggleNewsFeedSelect
  | ICauseActions.SelectOrgCreateCause
;
