import * as moment from 'moment';
import { moneyMask } from './masks';

const isEmpty = (value: string) => value === undefined || value === null || value === '';
const join = (rules: any[]) => (value: any, data: any) => rules.map((rule) => rule(value, data)).filter((error) => !!error)[0];

/* eslint-disable consistent-return */
export function email(value: string) {
  // Let's not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
  return undefined;
}

/** Ensure that a string represents a zip code */
export function zipCode(zip: string) {
  if (!isEmpty(zip) && !/(^\d{5}$)|(^\d{5}-\d{4}$)/i.test(zip)) {
    return 'Invalid Zip Code';
  }
  return undefined;
}

/** Ensure that a string represents a PO Box */
export function poBox(value: string) {
  // tslint:disable-next-line:max-line-length
  const pattern = /^ *(?!(#\d+)|((box|bin)[-. \/\\]?\d+)|(.*p[ \.]? ?(o|0)[-. \/\\]? *-?((box|bin)|b|(#|num)?\d+))|(p(ost)? *(o(ff(ice)?)?)? *((box|bin)|b)? *\d+)|(p *-?\/?(o)? *-?box)|post office box|((box|bin)|b) *(number|num|#)? *\d+|(num|number|#) *\d+)/i;
  if (!isEmpty(value) && !pattern.test(value)) {
    return 'No PO Boxes Please';
  }
  return undefined;
}

/** Ensure that a string represents a valid date */
export function validDate(value: string) {
  if (!isEmpty(value) && !moment(value, 'MM/DD/YYYY', true).isValid()) {
    return 'Please use a valid date';
  }
  return undefined;
}

/** Ensure that a string represents a value less than 18 */
type MonthString = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
export function youngerThan18(value: { month: MonthString, day: string, year: string }) {
  let testVal;
  let format = 'MM/DD/YYYY';
  if (value && value.month && value.day && value.year) {
    testVal = `${value.month}/${value.day}/${value.year}`;
    format = 'MM/DD/YYYY';
  }
  if (!isEmpty(testVal) && !moment(testVal, format, true).isBefore(moment().subtract(18, 'years'))) {
    return 'Sorry, Today you must be 18 or older';
  }
  return undefined;
}

/** Ensure that a string represents a citizen or resident alien */
export function citizenship(value?: 'N' | 'C') {
  if (!isEmpty(value) && value === 'N') {
    return 'Sorry, Today you must be a citizen or resident alien';
  }
  return undefined;
}

/** Ensure that a string represents a Social Security Number */
export function ssn(value: string) {
  if (!isEmpty(value) && !/^(?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4}$/.test(value.replace(/-/g, ''))) {
    return 'Please use a valid Social Security Number';
  }
  return undefined;
}

/** Ensure that a value exists */
export function required(value: string) {
  if (isEmpty(value)) {
    return 'This field is required';
  }
  return undefined;
}

/** Ensure that a string length is >= min */
export function minLength(min: number) {
  return (value: string) => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`;
    }
    return undefined;
  };
}

/** Ensure that a string length is exactly a value */
export function exactLength(length: number, error?: string) {
  return (value: string) => {
    if (!isEmpty(value) && value.length !== length) {
      return (error || `Must be ${length} characters`);
    }
    return undefined;
  };
}

/** Ensure that a string length < max */
export function maxLength(max: number) {
  return (value: string) => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`;
    }
    return undefined;
  };
}

/** Ensure that a value <= max */
export function maxNumber(max: number, error?: string): Function {
  return (valueArg: string|number) => {
    let value = valueArg;
    if (typeof value === 'string') {
      value = parseInt(value, 10);
    }
    if (value > max) {
      return error || `The maximum value allowed is ${moneyMask(max)}`;
    }
    return undefined;
  };
}

/** Ensure that a string represents an integer */
export function integer(value: string | number) {
  if (!Number.isInteger(Number(value))) {
    return 'Must be a whole number';
  }
  return undefined;
}

// export function oneOf(enumeration) {
//   return (value) => {
//     if (!~enumeration.indexOf(value)) {
//       return `Must be one of: ${enumeration.join(', ')}`;
//     }
//   };
// }

/** Ensure that a value matches a parameter of an object */
export function match(field: string) {
  return (value: any, data?: any) => {
    if (data) {
      if (value !== data[field]) {
        return 'Your passwords do not match';
      }
      return undefined;
    }
    return undefined;
  };
}

/** Ensure that a value is >= 18 */
export function age(value: number) {
  if (value < 18) {
    return 'Sorry, Today you must be over 18';
  }
  return undefined;
}

/** Ensure that a string represents a year in the future */
export function futureYear(value: string) {
  if (parseInt(value, 10) > parseInt(moment().format('YYYY'), 10)) {
    return 'Please use a valid year';
  }
  return undefined;
}

/** Ensure that a string represents a number */
export function textNumber(value: string) {
  if (isNaN(Number(value))) {
    return 'Please use a valid number';
  }
  return undefined;
}

/** Ensure that a password has requirements */
export function password(value: string) {
  let error;
  if (required(value)) {
    error = required(value);
  } else if (typeof value === 'undefined' || (value && value.length < 8)) {
    error = 'Password must be at least 8 characters';
  } else if (!value || !(/.*[a-z].*/.test(value))) {
    error = 'Password must contain a lower case letter';
  } else if (!(/.*[A-Z].*/.test(value))) {
    error = 'Password must contain a capital letter';
  } else if (!(/.*[0-9].*/.test(value))) {
    error = 'Password must contain a number';
  }
  return error;
}

/** Ensure that a password has requirements */
export function passwordThreeFields(value: string) {
  let errors = [];
  if (required(value)) {
    errors.push(required(value));
  }
  if (typeof value === 'undefined' || (value && value.length < 8)) {
    errors.push('Password must be at least 8 characters');
  }
  if (!value || !(/.*[a-z].*/.test(value))) {
    errors.push('Password must contain a lower case letter');
  }
  if (!(/.*[A-Z].*/.test(value))) {
    errors.push('Password must contain a capital letter');
  }
  if (!(/.*[0-9].*/.test(value))) {
    errors.push('Password must contain a number');
  }
  // if (!(/.*[!@#$%^&*()].*/.test(value))) {
  //   errors.push('Password must contain a special character !@#$%^&*()');
  // }
  if (errors.length === 0) {
    errors = undefined;
  }
  return errors;
}

/** Creates a validator */
export function createValidator(rules: {[x: string]: Function|Array<Function>}): Function {
  return (data: any = {}): any => {
    if (data.toJS) {
      data = data.toJS(); // eslint-disable-line
    }
    const errors: any = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}
//
// export function addressRules(addressFields, poBoxValidate) {
//   return Object.keys(addressFields).reduce((errors, name) => { //eslint-disable-line
//     const newFields = { ...errors };
//     newFields.address1 = required;
//     if (poBoxValidate) {
//       newFields.address2 = [poBox];
//     }
//     newFields.city = [required];
//     newFields.state = [required];
//     newFields.zip = [required, minLength(5), zipCode];
//     return newFields;
//   }, {});
// }
/* eslint-enable */
