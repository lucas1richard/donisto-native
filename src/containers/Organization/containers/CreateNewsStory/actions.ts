/*
 *
 * CreateNewsStory actions
 *
 */

import CreateNewsStoryConstants from './constants';

export type TCreateNewsStoryActions =
  IDefaultAction
;

interface IDefaultAction {
  type: CreateNewsStoryConstants.DEFAULT_ACTION
}

export const defaultAction = (): IDefaultAction => ({
  type: CreateNewsStoryConstants.DEFAULT_ACTION
});
