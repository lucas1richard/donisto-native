
import {
  defaultAction
} from '../actions';
import MessagesConstants from '../constants';

describe('Messages actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: MessagesConstants.DEFAULT_ACTION
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
