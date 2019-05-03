
import { defaultAction } from '../actions';
import OrganizationConstants from '../constants';

describe('Organization actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: OrganizationConstants.DEFAULT_ACTION
      };
      expect(defaultAction()).toEqual(expected);
    });
  });
});
