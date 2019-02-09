import { numberMask, commaNumberMask, moneyMask, decimalMask, phoneMask, ssnMask, dateMask } from '../masks';
describe('decimalMask', () => {
    it('should strip out non-digits', () => {
        expect(decimalMask('f')).toEqual('');
        expect(decimalMask('-')).toEqual('');
        expect(decimalMask('.')).toEqual('0.');
    });
    it('should keep digits in', () => {
        expect(decimalMask('5')).toEqual('5');
        expect(decimalMask('.5')).toEqual('0.');
        expect(decimalMask('1')).toEqual('1');
    });
    it('should keep last 2 decimals', () => {
        expect(decimalMask()).toEqual('');
        expect(decimalMask('5.')).toEqual('5.');
        expect(decimalMask('5.2')).toEqual('5.2');
        expect(decimalMask('5.21')).toEqual('5.21');
        expect(decimalMask('5.21.2442')).toEqual('5.21');
        expect(decimalMask('5.2242as2')).toEqual('5.22');
        expect(decimalMask('5.2242as2')).toEqual('5.22');
        expect(decimalMask('105.2242as2')).toEqual('105.22');
    });
});
describe('numberMask', () => {
    it('should strip out non-digits', () => {
        expect(numberMask('f')).toEqual('');
        expect(numberMask('-')).toEqual('');
    });
    it('should keep digits in', () => {
        expect(numberMask('5')).toEqual('5');
    });
    it('should return empty if input is empty', () => {
        expect(numberMask('')).toEqual('');
    });
});
describe('commaNumberMask', () => {
    it('should return empty string with empty input', () => {
        expect(commaNumberMask()).toEqual('');
        expect(commaNumberMask('')).toEqual('');
    });
    it('should format numbers correctly with commas', () => {
        expect(commaNumberMask(0)).toEqual('0');
        expect(commaNumberMask(100)).toEqual('100');
        expect(commaNumberMask(1000)).toEqual('1,000');
        expect(commaNumberMask(10000)).toEqual('10,000');
        expect(commaNumberMask(100000)).toEqual('100,000');
        expect(commaNumberMask(1000000)).toEqual('1,000,000');
    });
});
describe('moneyMask', () => {
    it('should make money of text', () => {
        expect(moneyMask(10)).toEqual('$10');
        expect(moneyMask(10000)).toEqual('$10,000');
    });
    it('should keep decimals', () => {
        expect(moneyMask(10.4)).toEqual('$10.4');
        expect(moneyMask(10.46)).toEqual('$10.46');
        expect(moneyMask(1000.4)).toEqual('$1,000.4');
    });
    it('should return empty string if empty input', () => {
        expect(moneyMask('')).toEqual('');
    });
    it('should return $0 when value is 0', () => {
        expect(moneyMask(0)).toEqual('$0');
    });
});
describe('phoneMask', () => {
    it('should return emtpy string if no value is passed', () => {
        expect(phoneMask()).toEqual('');
    });
    it('should return only the first 3 digits with a open parens', () => {
        expect(phoneMask('22')).toEqual('(22');
        expect(phoneMask('2')).toEqual('(2');
        expect(phoneMask('222')).toEqual('(222');
    });
    it('should return between (xxx) xxx', () => {
        expect(phoneMask('12312')).toEqual('(123) 12');
        expect(phoneMask('123123')).toEqual('(123) 123');
        expect(phoneMask('1231234')).toEqual('(123) 123-4');
    });
    it('should return (xxx) xxx-xxxx', () => {
        expect(phoneMask('12312345')).toEqual('(123) 123-45');
        expect(phoneMask('123123456')).toEqual('(123) 123-456');
        expect(phoneMask('1231234567')).toEqual('(123) 123-4567');
    });
});
describe('ssnMask', () => {
    it('should return empty if no value', () => {
        expect(ssnMask()).toEqual('');
    });
    it('should return a properly formatted ssn', () => {
        expect(ssnMask('123124212')).toEqual('123-12-4212');
    });
    it('should return only the first 2 parts if length between 3 and 5', () => {
        expect(ssnMask('1231')).toEqual('123-1');
    });
    it('shoudl return unformatted numbers if there is less than 3', () => {
        expect(ssnMask('123')).toEqual('123');
    });
});
describe('dateMask', () => {
    it('should return an empty string', () => {
        expect(dateMask()).toEqual('');
    });
    it('should return a fully formatted date', () => {
        expect(dateMask('12121992')).toEqual('12/12/1992');
        expect(dateMask('12121')).toEqual('12/12/1');
    });
    it('should only return month and day', () => {
        expect(dateMask('121')).toEqual('12/1');
    });
    it('should return just the first 2 numbers', () => {
        expect(dateMask('12')).toEqual('12');
    });
});
//# sourceMappingURL=masks.test.js.map