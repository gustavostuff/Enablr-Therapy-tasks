interface CalendarTimeSlot {
  status: 'available' | 'unavailable';
}

interface DayOfWeek {
  [time: string]: CalendarTimeSlot;
}

interface WeekOfWork {
  [day: string]: DayOfWeek;
}

interface Weeks {
  [date: string]: WeekOfWork;
}