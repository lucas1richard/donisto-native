/*
 *
 * CreateNewsStory actions
 *
 */

import CreateNewsStoryConstants from './constants';
import { TCreateStoryStatus } from './reducer';

export type TCreateNewsStoryActions =
  ISubmitStoryAction
  | ISubmitStorySuccessAction
  | ISubmitStoryFailAction
  | ISetCreateStoryStatusAction
;

export interface ISubmitStoryAction {
  type: CreateNewsStoryConstants.SUBMIT_STORY
}

export const submitStoryAction = (): ISubmitStoryAction => ({
  type: CreateNewsStoryConstants.SUBMIT_STORY
});

export interface ISubmitStorySuccessAction {
  type: CreateNewsStoryConstants.SUBMIT_STORY_SUCCESS;
  story: any;
}

export const submitStorySuccessAction = (story: any): ISubmitStorySuccessAction => ({
  type: CreateNewsStoryConstants.SUBMIT_STORY_SUCCESS,
  story
});

export interface ISubmitStoryFailAction {
  type: CreateNewsStoryConstants.SUBMIT_STORY_FAIL;
  error: any;
}

export const submitStoryFailAction = (error: any): ISubmitStoryFailAction => ({
  type: CreateNewsStoryConstants.SUBMIT_STORY_FAIL,
  error
});

export interface ISetCreateStoryStatusAction {
  type: CreateNewsStoryConstants.SET_STORY_STATUS;
  status: TCreateStoryStatus
}

export const setCreateStoryStatusAction = (status: TCreateStoryStatus): ISetCreateStoryStatusAction => ({
  type: CreateNewsStoryConstants.SET_STORY_STATUS,
  status
});
