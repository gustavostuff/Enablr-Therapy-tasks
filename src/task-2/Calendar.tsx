import { useEffect, useState } from "react";
import { getWeekSunToSat, getStartOfWeek } from "../utils";
import moment from "moment";
import WeekColumn from "./WeekColumn";

function Calendar() {
  const [calendarData, setCalendarData] = useState<Weeks>({
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
  });
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toISOString().substring(0, 10)
  );
  const [datesInCurrentWeek, setDatesInCurrentWeek] = useState<string[]>([]);
  const [unavailableTimes, setUnavailableTimes] = useState<WeekOfWork>({});

  const initCurrentWeek = (date: string) => {
    setDatesInCurrentWeek(getWeekSunToSat(date));
    const unavailableTimesInCurrentWeek: WeekOfWork =
      calendarData[getStartOfWeek(date)] || {};
    setUnavailableTimes(unavailableTimesInCurrentWeek);
  };

  useEffect(() => {
    setDatesInCurrentWeek(getWeekSunToSat(currentDate));
    const timesInCurrentWeek = calendarData[getStartOfWeek(currentDate)] || [];
    setUnavailableTimes(timesInCurrentWeek);
  }, []);

  useEffect(() => {
    initCurrentWeek(currentDate);
  }, [calendarData]);

  const changeWeek = (direction: string) => {
    const date = moment(currentDate);
    if (direction === "prev") {
      date.subtract(1, "week");
    } else if (direction === "next") {
      date.add(1, "week");
    }
    const dateStr: string = date.toISOString().substring(0, 10);
    setCurrentDate(dateStr);
    initCurrentWeek(dateStr);
  };

  const changeSlotState = (time: string, day: string) => {
    // console.log("saveSlot", time, day);
    const newState = {...calendarData};
    const firstDayOfWeek = getStartOfWeek(currentDate);
    if (!newState[firstDayOfWeek]) {
      newState[firstDayOfWeek] = {};
    }
    if (!newState[firstDayOfWeek][day]) {
      newState[firstDayOfWeek][day] = {};
    }
    if (!newState[firstDayOfWeek][day][time]) {
      newState[firstDayOfWeek][day][time] = {
        status: 'unavailable'
      };
    }

    setCalendarData(newState);
  }

  return (
    <div className="container calendar">
      <h1>Task 2</h1>
      <div className="week-grid mt-1">
        <button className="calendar-arrow" onClick={() => changeWeek("prev")}>
        <i className="fa fa-chevron-left"></i>
        </button>
        {datesInCurrentWeek.map((date: string) => {
          const currentDay = moment(date).format("ddd");
          return (
            <WeekColumn
              unavailable={unavailableTimes[currentDay] || {}}
              key={date}
              date={date}
              day={currentDay}
              changeSlotState={changeSlotState}
            />
          );
        })}
        <button className="calendar-arrow" onClick={() => changeWeek("next")}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
      {/* <pre>{datesInCurrentWeek[0]}</pre>
      <pre>{JSON.stringify(unavailableTimes, null, 2)}</pre> */}
      <h3>Notes</h3>
      <ul>
        <li>Added the hour time stamp to available slots</li>
        <li>Moved week arrows to a different position (just personal taste)</li>
        <li>Unlike in figma, all hours are at the same height thru the days</li>
      </ul>
      <p>I did some changes just to have a look and feel more similar to an actual calendar</p>
    </div>
  );
}

export default Calendar;
