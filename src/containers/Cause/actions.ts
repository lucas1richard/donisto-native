import CauseConstants from './constants';
import { ICauseActionCreators } from './types/actions';

export const createCauseAction: ICauseActionCreators.CreateCause = {
  Default: () => ({
    type: CauseConstants.CREATE_CAUSE_ACTION,
  }),
  Fail: (error) => ({
    type: CauseConstants.CREATE_CAUSE_FAIL_ACTION,
    error,
  }),
  Success: (data) => ({
    type: CauseConstants.CREATE_CAUSE_SUCCESS_ACTION,
    data,
  }),
};

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export const getCauseAction: ICauseActionCreators.GetCause = {
  Default: () => ({
    type: CauseConstants.GET_CAUSE_ACTION,
  }),
  Fail: (error) => ({
    type: CauseConstants.GET_CAUSE_FAIL_ACTION,
    error,
  }),
  Success: (data) => ({
    type: CauseConstants.GET_CAUSE_SUCCESS_ACTION,
    data,
  }),
};

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export const getContactCausesAction: ICauseActionCreators.GetContactCauses = {
  Default: () => ({
    type: CauseConstants.GET_CONTACT_CAUSES_ACTION,
  }),
  Fail: (error) => ({
    type: CauseConstants.GET_CONTACT_CAUSES_FAIL_ACTION,
    error,
  }),
  Success: (data) => ({
    type: CauseConstants.GET_CONTACT_CAUSES_SUCCESS_ACTION,
    data,
  }),
};

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export const getCauseDetailByIdAction: ICauseActionCreators.GetCauseDetailById = {
  WithUuids: (cause_uuids: string[]) => ({
    type: CauseConstants.GET_CAUSE_DETAIL_BY_ID_ACTION,
    cause_uuids,
  }),
  Fail: (error: any) => ({
    type: CauseConstants.GET_CAUSE_DETAIL_BY_ID_FAIL_ACTION,
    error,
  }),
  Success: (data) => ({
    type: CauseConstants.GET_CAUSE_DETAIL_BY_ID_SUCCESS_ACTION,
    data,
  }),
  Default: () => ({
    type: CauseConstants.GET_CAUSE_DETAIL_BY_ID_ACTION,
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const getCauseDetailAction: ICauseActionCreators.GetCauseDetail = {
  WithUuids: (cause_uuids: string[]) => ({
    type: CauseConstants.GET_CAUSE_DETAIL_ACTION,
    cause_uuids,
  }),
  Fail: (error: any) => ({
    type: CauseConstants.GET_CAUSE_DETAIL_FAIL_ACTION,
    error,
  }),
  Success: (data) => ({
    type: CauseConstants.GET_CAUSE_DETAIL_SUCCESS_ACTION,
    data,
  }),
  Default: () => ({
    type: CauseConstants.GET_CAUSE_DETAIL_ACTION,
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const toggleNewsFeedSelectAction: ICauseActionCreators.ToggleNewsFeedSelect = (uuid) => ({
  type: CauseConstants.TOGGLE_NEWSFEED_SELECT,
  uuid
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const selectOrgCreateCauseAction: ICauseActionCreators.SelectOrgCreateCause = (uuid) => ({
  type: CauseConstants.SELECT_ORG_CREATE_CAUSE_ACTION,
  uuid
});
