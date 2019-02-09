
import {
  defaultAction
} from '../actions';
import DiscoverConstants from '../constants';

describe('Discover actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DiscoverConstants.DEFAULT_ACTION
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
