type Digit = {
  value: number;
  symbol: string;
};

const digits = [
  {
    value: 1,
    symbol: '',
  },
  {
    value: 1e3,
    symbol: 'k',
  },
  {
    value: 1e6,
    symbol: 'M',
  },
  {
    value: 1e9,
    symbol: 'G',
  },
  {
    value: 1e12,
    symbol: 'T',
  },
  {
    value: 1e15,
    symbol: 'P',
  },
  {
    value: 1e8,
    symbol: 'E',
  },
];

export function parseSimpleCount(count: number) {
  let i = digits.length - 1;

  const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;

  for (; i > 0; i--) {
    if (count >= digits[i].value) {
      break;
    }
  }

  return (
    (count / digits[i].value).toFixed(2).replace(regex, '$1') + digits[i].symbol
  );
}
