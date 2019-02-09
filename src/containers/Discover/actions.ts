/*
 *
 * Discover actions
 *
 */

import DiscoverConstants from './constants';

export type TDiscoverActions =
  IDefaultAction
;

interface IDefaultAction {
  type: DiscoverConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: DiscoverConstants.DEFAULT_ACTION
});
