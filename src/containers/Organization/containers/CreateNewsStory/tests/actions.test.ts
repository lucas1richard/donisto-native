
import {
  submitStoryAction,
  submitStorySuccessAction,
  submitStoryFailAction,
  ISubmitStoryAction,
  ISubmitStorySuccessAction,
  ISubmitStoryFailAction,
  setCreateStoryStatusAction,
  ISetCreateStoryStatusAction
} from '../actions';
import CreateNewsStoryConstants from '../constants';

describe('CreateNewsStory actions', () => {
  describe('submitStoryAction', () => {
    it('has a type of SUBMIT_STORY', () => {
      const expected: ISubmitStoryAction = {
        type: CreateNewsStoryConstants.SUBMIT_STORY
      };
      expect(submitStoryAction()).toEqual(expected);
    });
  });
  describe('submitStorySuccessAction', () => {
    it('has a type of SUBMIT_STORY_SUCCESS', () => {
      const story = 'mockStory';
      const expected: ISubmitStorySuccessAction = {
        type: CreateNewsStoryConstants.SUBMIT_STORY_SUCCESS,
        story
      };
      expect(submitStorySuccessAction(story)).toEqual(expected);
    });
  });
  describe('submitStoryFailAction', () => {
    it('has a type of SUBMIT_STORY_FAIL', () => {
      const error = 'mockError';
      const expected: ISubmitStoryFailAction = {
        type: CreateNewsStoryConstants.SUBMIT_STORY_FAIL,
        error
      };
      expect(submitStoryFailAction(error)).toEqual(expected);
    });
  });
  describe('submitStoryFailAction', () => {
    it('has a type of SUBMIT_STORY_FAIL', () => {
      const status = 'editing';
      const expected: ISetCreateStoryStatusAction = {
        type: CreateNewsStoryConstants.SET_STORY_STATUS,
        status
      };
      expect(setCreateStoryStatusAction(status)).toEqual(expected);
    });
  });
});
