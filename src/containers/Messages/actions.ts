/*
 *
 * Messages actions
 *
 */

import MessagesConstants from './constants';

export type TMessagesActions =
  IDefaultAction
;

interface IDefaultAction {
  type: MessagesConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: MessagesConstants.DEFAULT_ACTION
});
