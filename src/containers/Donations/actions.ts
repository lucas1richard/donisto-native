import DonationsConstants from './constants';
import { IDonationActionCreators, IDonationActions } from './types/actions';

export type TDonationsActions =
  IDefaultAction
  | IDonationActions.GetDonations['Default']
  | IDonationActions.GetDonations['Fail']
  | IDonationActions.GetDonations['Success']
  | IDonationActions.GetDonationsById['Default']
  | IDonationActions.GetDonationsById['Fail']
  | IDonationActions.GetDonationsById['Success']
  | IDonationActions.GetDonationsById['WithUuids']
  | IDonationActions.CreateDonation['Default']
  | IDonationActions.CreateDonation['Fail']
  | IDonationActions.CreateDonation['Success']
  | IDonationActions.SelectDetailView['WithUuid']
  | IDonationActions.SelectDonationCause['WithUuid']
;

export interface IDefaultAction {
  type: DonationsConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: DonationsConstants.DEFAULT_ACTION
});

export const getDonationsAction: IDonationActionCreators.GetDonations = {
  Default: () => ({
    type: DonationsConstants.GET_DONATIONS,
  }),
  Fail: (error) => ({
    type: DonationsConstants.GET_DONATIONS_FAIL,
    error,
  }),
  Success: (data) => ({
    type: DonationsConstants.GET_DONATIONS_SUCCESS,
    data,
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const getDonationsByIdAction: IDonationActionCreators.GetDonationsById = {
  WithUuids: (data: string[]) => ({
    type: DonationsConstants.GET_DONATIONS_BY_ID,
    data,
  }),
  Default: () => ({
    type: DonationsConstants.GET_DONATIONS_BY_ID,
  }),
  Fail: (error) => ({
    type: DonationsConstants.GET_DONATIONS_BY_ID_FAIL,
    error
  }),
  Success: (data) => ({
    type: DonationsConstants.GET_DONATIONS_BY_ID_SUCCESS,
    data
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const createDonationAction: IDonationActionCreators.CreateDonation = {
  Default: () => ({
    type: DonationsConstants.CREATE_DONATION
  }),
  Fail: (error) => ({
    type: DonationsConstants.CREATE_DONATION_FAIL,
    error
  }),
  Success: (data) => ({
    type: DonationsConstants.CREATE_DONATION_SUCCESS,
    data
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const selectDonationCauseAction: IDonationActionCreators.SelectDonationCause = {
  Default: () => ({
    type: DonationsConstants.SELECT_CAUSE,
  }),
  WithUuid: (causeUuid: string) => ({
    type: DonationsConstants.SELECT_CAUSE,
    causeUuid,
  }),
};

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const selectDetailViewAction: IDonationActionCreators.SelectDetailView = {
  Default: () => ({
    type: DonationsConstants.SELECT_DETAIL_VIEW,
  }),
  WithUuid: (donationUuid: string) => ({
    type: DonationsConstants.SELECT_DETAIL_VIEW,
    donationUuid,
  }),
};
