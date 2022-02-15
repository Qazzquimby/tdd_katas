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
  // [24, 'XXIV'],
])('%i -> %i', (input, expected) => {
  expect(convertToRomanNumerals(input)).toBe(expected);
});

test.each([
  [14, 'XIV'],
  // [24, 'XXIV'],
])('%i -> %i', (input, expected) => {
  expect(convertToRomanNumerals(input)).toBe(expected);
});
