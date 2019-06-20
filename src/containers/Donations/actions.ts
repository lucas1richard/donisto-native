/*
 *
 * Donations actions
 *
 */

import DonationsConstants from './constants';

export type TDonationsActions =
  IDefaultAction
  | IGetDonationsAction
  | IGetDonationsSuccessAction
  | IGetDonationsFailAction
  | ICreateDonationAction
  | ICreateDonationSuccessAction
  | ICreateDonationFailAction
  | ISelectDonationCauseAction
  | ISelectDetailViewAction
;

export interface IDefaultAction {
  type: DonationsConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: DonationsConstants.DEFAULT_ACTION
});

export interface IGetDonationsAction {
  type: DonationsConstants.GET_DONATIONS
}

export const getDonationsAction = (): IGetDonationsAction => ({
  type: DonationsConstants.GET_DONATIONS
});

export interface IGetDonationsSuccessAction {
  type: DonationsConstants.GET_DONATIONS_SUCCESS,
  donations: any[]
}

export const getDonationsSuccessAction = (donations: any[]): IGetDonationsSuccessAction => ({
  type: DonationsConstants.GET_DONATIONS_SUCCESS,
  donations
});

export interface IGetDonationsFailAction {
  type: DonationsConstants.GET_DONATIONS_FAIL,
  error: any
}

export const getDonationsFailAction = (error: any): IGetDonationsFailAction => ({
  type: DonationsConstants.GET_DONATIONS_FAIL,
  error
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IGetDonationsByIdAction {
  type: DonationsConstants.GET_DONATIONS_BY_ID,
  ids: string[]
}

export const getDonationsByIdAction = (ids: string[]): IGetDonationsByIdAction => ({
  type: DonationsConstants.GET_DONATIONS_BY_ID,
  ids,
});

export interface IGetDonationsByIdSuccessAction {
  type: DonationsConstants.GET_DONATIONS_BY_ID_SUCCESS,
  donations: any[]
}

export const getDonationsByIdSuccessAction = (donations: any[]): IGetDonationsByIdSuccessAction => ({
  type: DonationsConstants.GET_DONATIONS_BY_ID_SUCCESS,
  donations
});

export interface IGetDonationsByIdFailAction {
  type: DonationsConstants.GET_DONATIONS_BY_ID_FAIL,
  error: any
}

export const getDonationsByIdFailAction = (error: any): IGetDonationsByIdFailAction => ({
  type: DonationsConstants.GET_DONATIONS_BY_ID_FAIL,
  error
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface ICreateDonationAction {
  type: DonationsConstants.CREATE_DONATION
}

export const createDonationAction = (): ICreateDonationAction => ({
  type: DonationsConstants.CREATE_DONATION
});

export interface ICreateDonationSuccessAction {
  type: DonationsConstants.CREATE_DONATION_SUCCESS,
  donations: IDonation[]
}

export const createDonationSuccessAction = (donations: IDonation[]): ICreateDonationSuccessAction => ({
  type: DonationsConstants.CREATE_DONATION_SUCCESS,
  donations
});

export interface ICreateDonationFailAction {
  type: DonationsConstants.CREATE_DONATION_FAIL,
  error: any
}

export const createDonationFailAction = (error: any): ICreateDonationFailAction => ({
  type: DonationsConstants.CREATE_DONATION_FAIL,
  error
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface ISelectDonationCauseAction {
  type: DonationsConstants.SELECT_CAUSE,
  causeUuid: string
}

export const selectDonationCauseAction = (causeUuid: string): ISelectDonationCauseAction => ({
  type: DonationsConstants.SELECT_CAUSE,
  causeUuid
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface ISelectDetailViewAction {
  type: DonationsConstants.SELECT_DETAIL_VIEW,
  donationUuid: string
}

export const selectDetailViewAction = (donationUuid: string): ISelectDetailViewAction => ({
  type: DonationsConstants.SELECT_DETAIL_VIEW,
  donationUuid
});
