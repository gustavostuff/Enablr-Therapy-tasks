export interface CalendarTimeSlot {
  time: string;
  status: 'available' | 'unavailable' | 'to-be-confirmed';
}

export interface WeekOfWork {
  Sun?: CalendarTimeSlot[];
  Mon?: CalendarTimeSlot[];
  Tue?: CalendarTimeSlot[];
  Wed?: CalendarTimeSlot[];
  Thu?: CalendarTimeSlot[];
  Fri?: CalendarTimeSlot[];
  Sat?: CalendarTimeSlot[];
}

export type Weeks = {
  [date: string]: WeekOfWork;
};
