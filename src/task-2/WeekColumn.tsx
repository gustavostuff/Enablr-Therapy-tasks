import moment from "moment";
import TimeSlot from "./TimeSlot";

function WeekColumn({ unavailable, date, day }: any) {
  let firstHour = moment(date).hour(6).minute(0).second(0);

  return (
    <div className="week-column">
      <div className="number">{moment(date).format("D")}</div>
      <div className="name">{day}</div>
      {
        <div className="times">
          {Array.from(Array(6)).map(() => {
            const time = firstHour.format("HH:mm");
            firstHour.add(30, "minute");
            return (
              <TimeSlot
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
