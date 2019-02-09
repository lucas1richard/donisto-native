
import {
  defaultAction
} from '../actions';
import DonationsConstants from '../constants';

describe('Donations actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: DonationsConstants.DEFAULT_ACTION
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
