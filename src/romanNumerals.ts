export default function convertToRomanNumerals(input: number): string {
  let remainder = input;
  let result = '';

  if (remainder === 9) {
    result += 'IX';
    remainder -= 9;
  }

  if (remainder >= 10) {
    result += 'X';
    remainder -= 10;
  }

  if (remainder === 4) {
    result += 'IV';
    remainder -= 4;
  }

  if (remainder >= 5) {
    result += 'V';
    remainder -= 5;
  }

  result += 'I'.repeat(remainder);

  return result;
}
