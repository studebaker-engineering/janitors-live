import type { Show } from "@/types";

// Numeric calendar keys sort by year, month, and day without timezone conversion.
function calendarKey(date: string): number | null {
  const match = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(date);
  if (!match) return null;

  const [, monthText, dayText, yearText] = match;
  const month = Number(monthText);
  const day = Number(dayText);
  const year = Number(yearText);
  const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const daysInMonth = [
    31,
    leapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  if (
    year < 1 ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > daysInMonth[month - 1]
  ) {
    return null;
  }

  return year * 10000 + month * 100 + day;
}

export function splitShows(
  rows: Show[],
  today = new Date(),
): {
  upcoming: Show[];
  archive: Show[];
} {
  const todayKey =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();
  const upcoming: Show[] = [];
  const archive: Show[] = [];
  const sorted = rows
    .map((show) => ({ show, key: calendarKey(show.date ?? "") }))
    .filter(({ key }) => key !== null)
    .sort((a, b) => (a.key ?? 0) - (b.key ?? 0));

  for (const { show, key } of sorted) {
    if (key !== null && key >= todayKey) upcoming.push(show);
    else archive.push(show);
  }

  return { upcoming, archive: archive.reverse() };
}
