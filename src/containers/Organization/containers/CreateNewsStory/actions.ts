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

interface ISubmitStoryAction {
  type: CreateNewsStoryConstants.SUBMIT_STORY
}

export const submitStoryAction = (): ISubmitStoryAction => ({
  type: CreateNewsStoryConstants.SUBMIT_STORY
});

interface ISubmitStorySuccessAction {
  type: CreateNewsStoryConstants.SUBMIT_STORY_SUCCESS;
  story: any;
}

export const submitStorySuccessAction = (story: any): ISubmitStorySuccessAction => ({
  type: CreateNewsStoryConstants.SUBMIT_STORY_SUCCESS,
  story
});

interface ISubmitStoryFailAction {
  type: CreateNewsStoryConstants.SUBMIT_STORY_FAIL;
  error: any;
}

export const submitStoryFailAction = (error: any): ISubmitStoryFailAction => ({
  type: CreateNewsStoryConstants.SUBMIT_STORY_FAIL,
  error
});

interface ISetCreateStoryStatusAction {
  type: CreateNewsStoryConstants.SET_STORY_STATUS;
  status: TCreateStoryStatus
}

export const setCreateStoryStatusAction = (status: TCreateStoryStatus): ISetCreateStoryStatusAction => ({
  type: CreateNewsStoryConstants.SET_STORY_STATUS,
  status
});
