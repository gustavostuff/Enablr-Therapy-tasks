import moment from 'moment';

// For Task 1:

export function getAlternativeMondays(
  startDate: string,
  endDate: string
): string[] {
  let currentDate = moment(startDate)
  const finalDate = moment(endDate);

  // Get the day of the week for the current date
  const currentDay = currentDate.day() || 7;
  // Calculate the difference in days to the next Monday
  const differenceToNextMonday = (8 - currentDay) % 7;

  // If the current day is already Monday, we don't need an offset
  // Otherwise, we set the offset to the difference calculated above
  
  const dayOffset = currentDay === 1 ? 0 : differenceToNextMonday;
  // Apply the offset to the current date so that it falls on a Monday
  currentDate = moment(currentDate).add(dayOffset, 'days');

  // Create an array to hold the resulting dates
  const alternativeMondays: string[] = [];
  while (currentDate.isSameOrBefore(finalDate)) {
    alternativeMondays.push(currentDate.toString());
    // Increment the date by 14 days to get to the Monday after next
    currentDate = moment(currentDate).add(14, 'days');
  }

  return alternativeMondays;
}


// For Task 2:

export function getWeekSunToSat(dateString: string): string[] {
  const inputDate = moment(dateString);
  const weekDates: string[] = [];

  // Set the locale to "en-US" where Sunday is the first day of the week
  inputDate.locale('en-US');
  inputDate.startOf('week');

  // Loop through the days of the week (Sunday to Saturday)
  for (let i = 0; i < 7; i++) {
    const formattedDate = inputDate.format('YYYY-MM-DD');
    weekDates.push(formattedDate);
    inputDate.add(1, 'day');// Move to the next day
  }

  return weekDates;
}

export function getStartOfWeek(dateString: string): string {
  const inputDate = moment(dateString);
  inputDate.locale('en-US');
  inputDate.startOf('week');
  return inputDate.format('YYYY-MM-DD');
}

export function addWeeksToDate(dateObj: Date, numberOfWeeks: number) {
  dateObj.setDate(dateObj.getDate() + numberOfWeeks * 7);
  return dateObj;
}
