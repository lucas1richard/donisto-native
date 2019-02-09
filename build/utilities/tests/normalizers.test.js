import { normalizeMoney } from '../normalizers';
describe('normalizeMoney', () => {
    it('should normalize money inputs', () => {
        expect(normalizeMoney('10')).toEqual(10);
        expect(normalizeMoney('10.00')).toEqual(10);
        expect(normalizeMoney('10.10')).toEqual(10.10);
        expect(normalizeMoney('10.1000000')).toEqual(10.10);
        expect(normalizeMoney('10.12fsafsa')).toEqual(10.12);
        expect(normalizeMoney('.5')).toEqual('0.');
        expect(normalizeMoney('10.12fsafsa')).toEqual(10.12);
        expect(normalizeMoney('$1.12fsafsa')).toEqual(1.12);
        expect(normalizeMoney('$1,000.12fsafsa')).toEqual(1000.12);
    });
    it('should return an empty string if num is blank', () => {
        expect(normalizeMoney('')).toEqual('');
    });
});
//# sourceMappingURL=normalizers.test.js.map