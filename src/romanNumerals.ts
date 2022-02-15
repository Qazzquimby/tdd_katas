class RomanNumeralSegment {
  amount: number;

  symbol: string;

  constructor(amount:number, symbol: string) {
    this.amount = amount;
    this.symbol = symbol;
  }
}

export default function convertToRomanNumerals(input: number): string {
  let remainder = input;
  let result = '';

  const segments = [
    new RomanNumeralSegment(10, 'X'),
    new RomanNumeralSegment(9, 'IX'),
  ];

  segments.forEach((segment) => {
    if (remainder >= segment.amount) {
      result += segment.symbol;
      remainder -= segment.amount;
    }
  });

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
