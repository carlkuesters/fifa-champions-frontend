export const MONTH_NAMES = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
];

export function formatDate(timestamp: number, format: (date: Date) => string): string {
  const date = new Date(timestamp * 1000);
  return format(date);
}

export function padDayOrMonth(value: number): string {
  return ((value < 10) ? '0' : '') + value;
}
