/*
 *
 * Form actions
 *
 */

import FormConstants from './constants';

export type TFormActions =
  IDefaultAction
;

interface IDefaultAction {
  type: FormConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: FormConstants.DEFAULT_ACTION
});
