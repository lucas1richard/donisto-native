import { fromJS } from 'immutable';
import { cleanUser, cleanProfileInfo } from '../cleaners';
describe('cleanUser', () => {
    it('should convert the Dob form section data into Y-m-d', () => {
        const fieldData = fromJS({ dob: { month: 'January', day: '20', year: '1990' } });
        expect(cleanUser(fieldData)).toEqual({ dob: '1990-01-20' });
    });
    it('should leave the data be if there is nothing to clean', () => {
        const fieldData = fromJS({ phone: '5555555555' });
        expect(cleanUser(fieldData)).toEqual({ phone: '5555555555' });
    });
    it('should remove non-digits from phone numbers', () => {
        const fieldData = fromJS({ phone: '(555) 555-5555' });
        expect(cleanUser(fieldData)).toEqual({ phone: '5555555555' });
    });
});
describe('cleanProfileInfo', () => {
    it('should remove null keys from the object', () => {
        const fieldData = fromJS({ phone: null, dob: '1990-01-20' });
        expect(cleanProfileInfo(fieldData)).toEqual(fromJS({ dob: '1990-01-20' }));
    });
});
//# sourceMappingURL=cleaners.test.js.map