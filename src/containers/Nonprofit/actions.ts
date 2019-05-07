/*
 *
 * Nonprofit actions
 *
 */

import NonprofitConstants from './constants';

export type TNonprofitActions =
  IDefaultAction
;

interface IDefaultAction {
  type: NonprofitConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: NonprofitConstants.DEFAULT_ACTION
});
