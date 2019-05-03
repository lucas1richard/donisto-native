// @flow

/**
 * @module utilities/masks
 */

/**
 * Formats and returns number string (only digits)
 */
export function numberMask(value: string|void): string {
  if (!value) {
    return '';
  }
  return value.replace(/\D+/g, '');
}

/**
 * Remove every character that's not a-z, A-Z, ', -, or a space
 */
export function nameMask(value: string|void) {
  if (!value) {
    return '';
  }
  return value.replace(/[^a-zA-Z'\- ]/g, '');
}

/**
 * Formats string to add commas
 */
export function commaNumberMask(value: string|number|void) {
  if (value !== 0 && !value) {
    return '';
  }
  const stringValue = typeof value !== 'string' ? value.toString() : value;

  return numberMask(stringValue) // removeNonDigits
    .replace(/\B(?=(\d{3})+(?!\d))/g, ','); // add commas
}

/**
 * Formats decimal string
 */
export function decimalMask(value: string|void) {
  if (!value) {
    return '';
  }

  // return value;
  const stripped = value.replace(/[^\d\\.]/g, '')
    .replace(/\./, 'x')
    .replace(/\./g, '')
    .replace(/x/, '.');

  if (stripped[0] === '.') return '0.';

  if (stripped[stripped.length - 1] === '.') return stripped;

  const strng = stripped; // remove leading 0s

  if (strng.lastIndexOf('.') === -1) {
    return strng.replace(/\b0(\d+)/g, '$1');
  }
  const split = strng.split('.');

  const cents = split[1] && split[1].substring(0, 2);

  const joined = split[0] && [split[0], cents].join('.');

  return joined;
}

/**
 * Formats and returns money string
 *  ex. $10,000
 */
export function moneyMask(value: number|string|void) {
  if (value === 0) {
    return '$0';
  }
  if (!value) {
    return '';
  }
  const stringValue = typeof value !== 'string' ? value.toString() : value;

  const addCommas = decimalMask(stringValue) // removeNonDigits
    .replace(/\B(?=(\d{3})+(?!\d))/g, ','); // add commas
  return `$${addCommas}`;
}

/**
 * Formats and returns phone string
 */
export function phoneMask(value: string|void) {
  if (!value) {
    return '';
  }
  const digits = numberMask(value);
  if (digits.length < 4) {
    return `(${digits}`;
  }
  if (digits.length < 7) {
    return `(${digits.substring(0, 3)}) ${digits.substring(3)}`;
  }
  return `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}-${digits.substring(6, 10)}`;
}

/**
 * Formats and returns SSN string
 */
export function ssnMask(value: string|void) {
  if (!value) {
    return '';
  }
  const digits = numberMask(value);
  if (digits.length > 5) {
    return `${digits.substring(0, 3)}-${digits.substring(3, 5)}-${digits.substring(5, 9)}`;
  }
  if (digits.length > 3) {
    return `${digits.substring(0, 3)}-${digits.substring(3, 5)}`;
  }
  return digits;
}

/**
 * Formats and returns date string
 */
export function dateMask(value: string|void) {
  if (!value) {
    return '';
  }
  const digits = numberMask(value);
  if (digits.length > 4) {
    return `${digits.substring(0, 2)}/${digits.substring(2, 4)}/${digits.substring(4, 8)}`;
  }
  if (digits.length > 2) {
    return `${digits.substring(0, 2)}/${digits.substring(2, 4)}`;
  }
  return digits;
}
