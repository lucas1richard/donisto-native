
import {
  defaultAction
} from '../actions';
import CreateNewsStoryConstants from '../constants';

describe('CreateNewsStory actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: CreateNewsStoryConstants.DEFAULT_ACTION
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
