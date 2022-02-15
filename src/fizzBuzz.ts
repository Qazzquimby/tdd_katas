export default function fizzBuzz(input: number): string {
  let result = '';
  // if (input % (5 * 3) === 0) {
  //   result += 'FizzBuzz';
  // }
  if (input % 3 === 0) {
    result += 'Fizz';
  }
  if (input.toString().includes('3')) {
    result += 'Fizz';
  }
  if (input % 5 === 0) {
    result += 'Buzz';
  }
  if (input.toString().includes('5')) {
    result += 'Buzz';
  }

  if (result) {
    return result;
  }
  return input.toString();
}
