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
    new RomanNumeralSegment(1000, 'M'),
    new RomanNumeralSegment(500, 'D'),
    new RomanNumeralSegment(100, 'C'),
    new RomanNumeralSegment(50, 'L'),
    new RomanNumeralSegment(10, 'X'),
    new RomanNumeralSegment(9, 'IX'),
    new RomanNumeralSegment(5, 'V'),
    new RomanNumeralSegment(4, 'IV'),
  ];

  segments.forEach((segment) => {
    while (remainder >= segment.amount) {
      result += segment.symbol;
      remainder -= segment.amount;
    }
  });

  result += 'I'.repeat(remainder);

  return result;
}
