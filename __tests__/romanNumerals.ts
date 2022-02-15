import romanNumerals from '../src/romanNumerals';

test.each([[1]])('not divisible by 4, %i -> not leap year', (year) => {
  expect(romanNumerals(year)).toBe(false);
});
