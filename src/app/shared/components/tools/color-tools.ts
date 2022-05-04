/**
 * Determines if a text value is hexadecimal.
 * @param hexadecimalValue Text to test.
 * @returns Boolean based on whether it is hexadecimal (true) or not (false).
 */
 export const isHexadecimal = (hexadecimalValue: string) => /^[0-9A-F]+$/ig.test(hexadecimalValue);