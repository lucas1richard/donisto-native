
import {
  createCauseAction
} from '../actions';
import CauseConstants from '../constants';

describe('Cause actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: CauseConstants.CREATE_CAUSE_ACTION
      };
      expect(createCauseAction()).toEqual(expected);
    });
  });
});
