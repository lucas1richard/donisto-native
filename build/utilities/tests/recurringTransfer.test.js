import { displayFrequency } from '../recurringTransfer';
describe('displayFrequency', () => {
    it('should return the correct description', () => {
        expect(displayFrequency('weekly')).toEqual('Weekly');
        expect(displayFrequency('biweekly')).toEqual('Every other week');
        expect(displayFrequency('monthly')).toEqual('Monthly');
        expect(displayFrequency('twiceMonthly')).toEqual('Twice Monthly');
        expect(displayFrequency()).toEqual('');
    });
});
//# sourceMappingURL=recurringTransfer.test.js.map