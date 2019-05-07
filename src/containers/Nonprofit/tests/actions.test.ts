
import {
  defaultAction
} from '../actions';
import NonprofitConstants from '../constants';

describe('Nonprofit actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: NonprofitConstants.DEFAULT_ACTION
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
