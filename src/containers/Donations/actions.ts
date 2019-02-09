/*
 *
 * Donations actions
 *
 */

import DonationsConstants from './constants';

export type TDonationsActions =
  IDefaultAction
;

interface IDefaultAction {
  type: DonationsConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: DonationsConstants.DEFAULT_ACTION
});
