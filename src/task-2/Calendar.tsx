import { useEffect, useState } from "react";
import { getWeekSunToSat, getStartOfWeek } from "../utils";
import { getCalendarData } from "../services/calendar.service";
import TimeSlot from "./TimeSlot";
import moment from "moment";
import WeekColumn from "./WeekColumn";

function Calendar() {
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toISOString().substring(0, 10)
  );
  const [datesInCurrentWeek, setDatesInCurrentWeek] = useState<string[]>([]);
  const [unavailableTimes, setUnavailableTimes] = useState<WeekOfWork>({});

  const initCurrentWeek = (date: string) => {
    setDatesInCurrentWeek(getWeekSunToSat(date));
    const calendarData = getCalendarData();
    const timesInCurrentWeek: WeekOfWork =
      calendarData[getStartOfWeek(date)] || [];
    setUnavailableTimes(timesInCurrentWeek);
  };

  useEffect(() => {
    setDatesInCurrentWeek(getWeekSunToSat(currentDate));
    const calendarData = getCalendarData();
    const timesInCurrentWeek = calendarData[getStartOfWeek(currentDate)] || [];
    setUnavailableTimes(timesInCurrentWeek);
  }, []);

  const changeWeek = (direction: string) => {
    const date = moment(currentDate);
    if (direction === "prev") {
      date.subtract(1, "week");
    } else {
      date.add(1, "week");
    }
    const dateStr: string = date.toISOString().substring(0, 10);
    setCurrentDate(dateStr);
    initCurrentWeek(dateStr);
  };

  return (
    <div className="container calendar">
      <h1>Task 2</h1>
      <div className="week-grid mt-1">
        <button onClick={() => changeWeek("prev")}>prev</button>
        {datesInCurrentWeek.map((date: string) => {
          const currentDay = moment(date).format("ddd");
          console.log("unavailableTimes[currentDay]", unavailableTimes[currentDay]);
          return (
            <WeekColumn
              unavailable={unavailableTimes[currentDay] || {}}
              key={date}
              date={date}
              day={currentDay}
            />
          );
        })}
        <button onClick={() => changeWeek("next")}>next</button>
      </div>

      <pre>{JSON.stringify(unavailableTimes, null, 2)}</pre>
    </div>
  );
}

export default Calendar;
