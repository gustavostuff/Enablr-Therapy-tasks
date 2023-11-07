// Testing with 2 weeks:


// the one starting at 2023-11-05
// the one starting at 2023-11-12

const weeks: Weeks = {
  ['2023-11-05']: { // Sunday
    Mon: {
      ['6:30 AM']: {
        status: 'unavailable'
      }
    },
  },
  ['2023-11-12']: {// Sunday
    Mon: {
      ['6:30 AM']: {
        status: 'unavailable'
      },
      ['7:30 AM']: {
        status: 'unavailable'
      }
    },
  },
};

export const getCalendarData = () => weeks;
