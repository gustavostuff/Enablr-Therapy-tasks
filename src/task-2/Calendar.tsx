import { useEffect, useState } from "react";
import { getWeekSunToSat, getStartOfWeek } from "../utils";
import { getCalendarData } from "../services/calendar.service";
import { WeekOfWork } from "../interfaces/calendar";
import TimeSlot from "./TimeSlot";
import moment from "moment";

function Calendar() {
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toISOString().substring(0, 10)
  );
  const [datesInCurrentWeek, setDatesInCurrentWeek] = useState<string[]>([]);
  const [timesInCurrentWeek, setTimesInCurrentWeek] = useState<WeekOfWork>({});

  const initCurrentWeek = (date: string) => {
    setDatesInCurrentWeek(getWeekSunToSat(date));
    const calendarData = getCalendarData();
    const timesInCurrentWeek: WeekOfWork = calendarData[getStartOfWeek(date)] || [];
    setTimesInCurrentWeek(timesInCurrentWeek);
  };

  useEffect(() => {
    setDatesInCurrentWeek(getWeekSunToSat(currentDate));
    const calendarData = getCalendarData();
    const timesInCurrentWeek = calendarData[getStartOfWeek(currentDate)] || [];
    setTimesInCurrentWeek(timesInCurrentWeek);
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
        {/* <pre>{JSON.stringify(datesInCurrentWeek, null, 2)}</pre> */}
        {datesInCurrentWeek.map((date: string) => {
          let firstHour = moment(date).hour(6).minute(0).second(0);
          const day = moment(date).format("ddd");
          const times = (timesInCurrentWeek as any)[day] || [];
          return (
            <div className="week-column" key={date}>
              <div className="number">{moment(date).format("D")}</div>
              <div className="name">{day}</div>
              {
                <div className="times">
                 {
                    Array.from(Array(6)).map((_, index) => {
                      const time = firstHour.format("HH:mm");
                      firstHour.add(30, "minute");
                      return (
                        <TimeSlot key={time} time={time} />
                      );
                    })
                 }
                  
                </div>
              }
            </div>
          );
        })}
        <button onClick={() => changeWeek("next")}>next</button>
      </div>

      <pre>{JSON.stringify(timesInCurrentWeek, null, 2)}</pre>
    </div>
  );
}

export default Calendar;
