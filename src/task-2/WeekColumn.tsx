import moment from "moment";
import TimeSlot from "./TimeSlot";

function WeekColumn({ unavailable, date, day, changeSlotState }: any) {
  let firstHour = moment(date).hour(6).minute(0).second(0);

  return (
    <div className="week-column">
      <div className="number">{moment(date).format("D")}</div>
      <div className="day-of-week">{day}</div>
      {
        <div className="times">
          {Array.from(Array(6)).map(() => {
            const time = firstHour.format("h:mm A");
            firstHour.add(30, "minute");
            // console.log('unavailable[time]', unavailable[time])
            return (
              <TimeSlot
                changeSlotState={(time: string) => changeSlotState(time, day)}
                status={unavailable[time]?.status}
                key={time}
                time={time}
              />
            );
          })}
        </div>
      }
    </div>
  );
}

export default WeekColumn;
