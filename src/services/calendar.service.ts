// Testing with 2 weeks:

import { Weeks } from "../interfaces/calendar";

// the one starting at 2023-11-05
// the one starting at 2023-11-12

const weeks: Weeks = {
  ['2023-11-05']: {
    Mon: [{
      time: '6:30 AM',
      status: 'unavailable'
    }],
  },
  ['2023-11-12']: {
    Wed: [{
      time: '6:30 AM',
      status: 'available'
    }, {
      time: '7:00 AM',
      status: 'available'
    }],
  },
};

export const getCalendarData = () => weeks;
