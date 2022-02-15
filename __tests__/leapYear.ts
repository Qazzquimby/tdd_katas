// A year is not a leap year if not divisible by 4
// A year is a leap year if divisible by 4
// A year is a leap year if divisible by 400
// A year is not a leap year if divisible by 100 but not by 400

import leapYear from '../src/leapYear';

test.each([[1], [3], [513], [1997]])('not divisible by 4, %i -> not leap year', (year) => {
  expect(leapYear(year)).toBe(false);
});

test.each([[4], [8], [12], [1996]])('simple div by 4, %i -> leap year', (year) => {
  expect(leapYear(year)).toBe(true);
});

test.each([
  [100],
  [200],
  [500],
  [1800],
])('div by 100 and not 400, %i -> not leap year', (year) => {
  expect(leapYear(year)).toBe(false);
});

test.each([
  [400],
  [800],
  [1600],
])('div by 400, %i -> leap year', (year) => {
  expect(leapYear(year)).toBe(true);
});
