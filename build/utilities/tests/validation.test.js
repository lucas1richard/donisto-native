import { email, zipCode, poBox, validDate, youngerThan18, citizenship, ssn, required, minLength, exactLength, maxLength, futureYear, integer, match, age, maxNumber, textNumber, createValidator } from '../validation';
describe('email validator', () => {
    it('should return undefined if email is valid', () => {
        expect(email('2142@email.com')).toBe(undefined);
    });
    it('should return a string if invalid', () => {
        expect(email('2142')).toBe('Invalid email address');
    });
});
describe('zipcode validator', () => {
    it('should return undefined if valid zip code', () => {
        expect(zipCode('12422')).toBe(undefined);
        expect(zipCode('12422-2412')).toBe(undefined);
    });
    it('should return string if invalid', () => {
        expect(zipCode('212')).toBe('Invalid Zip Code');
        expect(zipCode('fake')).toBe('Invalid Zip Code');
        expect(zipCode('21223-23')).toBe('Invalid Zip Code');
    });
});
describe('poBox validator', () => {
    it('should return undefined if no po box', () => {
        expect(poBox('123 Fake st')).toBe(undefined);
    });
    it('should return string if po box in address', () => {
        const errorMsg = 'No PO Boxes Please';
        expect(poBox('PO BOX ')).toBe(errorMsg);
        expect(poBox('P.O Box')).toBe(errorMsg);
        expect(poBox('P.O Box 4212')).toBe(errorMsg);
    });
});
describe('date validator', () => {
    it('should return undefined if a valid date', () => {
        expect(validDate('12/31/1955')).toBe(undefined);
    });
    it('should return a string if date is invalid', () => {
        const errorMsg = 'Please use a valid date';
        expect(validDate('12/44/1955')).toBe(errorMsg);
        expect(validDate('42/53/2555')).toBe(errorMsg);
        expect(validDate('42124')).toBe(errorMsg);
        expect(validDate('2/31/1999')).toBe(errorMsg);
        expect(validDate('random')).toBe(errorMsg);
    });
});
describe('age validator', () => {
    it('should make sure birth date is more than 18 years ago', () => {
        const errorMsg = 'Sorry, Today you must be 18 or older';
        expect(youngerThan18({ month: '12', year: '1966', day: '31' })).toBe(undefined);
        expect(youngerThan18({ month: '1', year: '2000', day: '30' })).toBe(errorMsg);
        // const adult = moment().subtract(18, 'years').format('MM/DD/YYYY');
        // expect(youngerThan18(adult)).toBe(undefined);
        // const child = moment(adult, 'MM/DD/YYYY').add(1, 'd').format('MM/DD/YYYY');
        // expect(youngerThan18(child)).toBe(errorMsg);
    });
});
describe('citizenship', () => {
    it('should only accept citizens or resident alients', () => {
        const errorMsg = 'Sorry, Today you must be a citizen or resident alien';
        expect(citizenship('N')).toBe(errorMsg);
        expect(citizenship('C')).toBe(undefined);
    });
});
describe('ssn validation', () => {
    it('should only accept valid ssn', () => {
        const errorMsg = 'Please use a valid Social Security Number';
        expect(ssn('330042122')).toBe(undefined);
        expect(ssn('33042122')).toBe(errorMsg);
        expect(ssn('21231222')).toBe(errorMsg);
        expect(ssn('42122')).toBe(errorMsg);
        expect(ssn('242')).toBe(errorMsg);
    });
});
describe('required validator', () => {
    it('should return string if field is required', () => {
        const errorMsg = 'This field is required';
        expect(required(undefined)).toBe(errorMsg);
        expect(required('Valid')).toBe(undefined);
    });
});
describe('minLength', () => {
    it('should return a string if min length is not met', () => {
        expect(minLength(4)('asdf')).toBe(undefined);
        expect(minLength(4)('asdfa')).toBe(undefined);
        expect(minLength(4)('asd')).toBe('Must be at least 4 characters');
    });
});
describe('exactLength validator', () => {
    it('should return a string if not exact length', () => {
        expect(exactLength(3, 'error')('asd')).toBe(undefined);
        expect(exactLength(3, 'error')('asd4')).toBe('error');
        expect(exactLength(3)('asd4')).toBe('Must be 3 characters');
        expect(exactLength(3)('as')).toBe('Must be 3 characters');
    });
});
describe('maxLength validator', () => {
    it('should return a string if length is too long', () => {
        expect(maxLength(4)('asdf')).toBe(undefined);
        expect(maxLength(4)('asd')).toBe(undefined);
        expect(maxLength(4)('asdfa')).toBe('Must be no more than 4 characters');
    });
});
describe('integer validator', () => {
    it('should return a string if not an integer', () => {
        expect(integer('as')).toBe('Must be a whole number');
        expect(integer(2)).toBe(undefined);
        expect(integer('2')).toBe(undefined);
    });
});
describe('match validator', () => {
    it('should return a string if it does not match', () => {
        const data = {
            test: 'match'
        };
        expect(match('test')('match', data)).toBe(undefined);
        expect(match('test')('matc', data)).toBe('Your passwords do not match');
    });
    it('should return undefined if no data is provided', () => {
        expect(match('test')('match')).toBe(undefined);
    });
});
describe('futureYear', () => {
    it('should reject future years', () => {
        expect(futureYear('4000')).toEqual('Please use a valid year');
    });
});
describe('maxNumber validator', () => {
    it('should return a function', () => {
        const max = maxNumber(100);
        expect(max(200)).toEqual('The maximum value allowed is $100');
        expect(max('99')).toEqual(undefined);
    });
});
describe('age validator', () => {
    it('should return a string if under 18', () => {
        expect(age(17)).toBe('Sorry, Today you must be over 18');
        expect(age(18)).toBe(undefined);
    });
});
describe('textNumber validator', () => {
    it('should return a string if val is not a number', () => {
        const errorMsg = 'Please use a valid number';
        expect(textNumber('24')).toBe(undefined);
        expect(textNumber('asfa')).toBe(errorMsg);
    });
});
describe('createValidator', () => {
    const data = {
        testField: 'Some data'
    };
    const rules = {
        testField: [required]
    };
    it('should return an errors object', () => {
        expect(createValidator(rules)(data)).toEqual({});
        expect(createValidator(rules)()).toEqual({
            testField: 'This field is required'
        });
    });
});
//# sourceMappingURL=validation.test.js.map