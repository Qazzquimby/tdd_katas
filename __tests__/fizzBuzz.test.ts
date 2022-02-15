import fizzBuzz from '../src/fizzBuzz';

test.each([
  [1, '1'],
  [2, '2'],
  [4, '4'],
])('%i -> %i', (input, expected) => {
  expect(fizzBuzz(input)).toBe(expected);
});

test.each([
  [6], [9], [12]])('%i -> Fizz', (input) => {
  expect(fizzBuzz(input)).toBe('Fizz');
});

test.each([
  [10], [20]])('%i -> Buzz', (input) => {
  expect(fizzBuzz(input)).toBe('Buzz');
});

test.each([
  [60], [90]])('%i -> FizzBuzz', (input) => {
  expect(fizzBuzz(input)).toBe('FizzBuzz');
});

test.each([
  [13], [23], [31]])('%i -> Fizz', (input) => {
  expect(fizzBuzz(input)).toBe('Fizz');
});

test.each([
  [5], [25], [50]])('%i -> BuzzBuzz', (input) => {
  expect(fizzBuzz(input)).toBe('BuzzBuzz');
});

test.each([
  [30]])('%i -> FizzFizzBuzz', (input) => {
  expect(fizzBuzz(input)).toBe('FizzFizzBuzz');
});
