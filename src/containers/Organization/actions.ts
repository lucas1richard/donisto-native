/*
 *
 * Organization actions
 *
 */

import OrganizationConstants from './constants';

export type TOrganizationActions =
  IDefaultAction
;

interface IDefaultAction {
  type: OrganizationConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: OrganizationConstants.DEFAULT_ACTION
});
