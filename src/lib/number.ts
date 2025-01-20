export function formatBigNumbers(value: number, decimal?: boolean) {
  let number = value;
  if (decimal) {
    number = Number(value.toFixed(2));
  }

  const format = new Intl.NumberFormat().format(number);

  return format;
}
