import convertToRomanNumerals from '../src/romanNumerals';

test.each([[1, 'I'], [2, 'II'], [3, 'III']])('%i -> %i', (input, expected) => {
  expect(convertToRomanNumerals(input)).toBe(expected);
});

test.each([
  [5, 'V'],
  [6, 'VI'],
  [7, 'VII'],
])('%i -> %i', (input, expected) => {
  expect(convertToRomanNumerals(input)).toBe(expected);
});

test.each([
  [10, 'X'],
  [11, 'XI'],
  [12, 'XII'],
  [13, 'XIII'],
])('%i -> %i', (input, expected) => {
  expect(convertToRomanNumerals(input)).toBe(expected);
});

test.each([
  [4, 'IV'],
  [9, 'IX'],
])('%i -> %i', (input, expected) => {
  expect(convertToRomanNumerals(input)).toBe(expected);
});

test.each([
  [20, 'XX'],
])('%i -> %i', (input, expected) => {
  expect(convertToRomanNumerals(input)).toBe(expected);
});

test.each([
  [14, 'XIV'],
  [24, 'XXIV'],
])('%i -> %i', (input, expected) => {
  expect(convertToRomanNumerals(input)).toBe(expected);
});

test.each([
  [50, 'L'],
  [100, 'C'],
  [200, 'CC'],
  [500, 'D'],
  [1000, 'M'],
  [2000, 'MM'],
])('%i -> %i', (input, expected) => {
  expect(convertToRomanNumerals(input)).toBe(expected);
});

test.each([
  [90, 'XC'],
  [40, 'XL'],
  [49, 'XLIX'],
  [400, 'CD'],
  [490, 'CDXC'],
  [3333, 'MMMCCCXXXIII'],
  [999, 'CMXCIX'],
])('%i -> %i', (input, expected) => {
  expect(convertToRomanNumerals(input)).toBe(expected);
});
