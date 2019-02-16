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
;

interface IDefaultAction {
  type: DonationsConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: DonationsConstants.DEFAULT_ACTION
});

interface IGetDonationsAction {
  type: DonationsConstants.GET_DONATIONS
}

export const getDonationsAction = (): IGetDonationsAction => ({
  type: DonationsConstants.GET_DONATIONS
});

interface IGetDonationsSuccessAction {
  type: DonationsConstants.GET_DONATIONS_SUCCESS,
  donations: any[]
}

export const getDonationsSuccessAction = (donations: any[]): IGetDonationsSuccessAction => ({
  type: DonationsConstants.GET_DONATIONS_SUCCESS,
  donations
});

interface IGetDonationsFailAction {
  type: DonationsConstants.GET_DONATIONS_FAIL,
  error: any
}

export const getDonationsFailAction = (error: any): IGetDonationsFailAction => ({
  type: DonationsConstants.GET_DONATIONS_FAIL,
  error
});
