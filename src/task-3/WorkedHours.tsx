
import { useEffect, useState } from "react";
import { WorkedHoursQueryResult } from "../interfaces/worked-hours";
import { queryDb, data } from "../services/worked-hours.service";

function WorkedHours() {
  const [queryResult, setQueryResult] = useState<WorkedHoursQueryResult[]>([]);

  useEffect(() => {
    const result: WorkedHoursQueryResult[] = queryDb();

    setQueryResult(result);
  }, []);

  return (
    <div className="container">
      <h1>Task 3</h1>
      <table className="simple-table">
        <thead>
          <tr>
            <th colSpan={5}>Data source</th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Status</th>
            <th>Provider ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record, index) => (
            <tr key={index}>
              <td>{record.id}</td>
              <td>{record.duration}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
              <td>{record.provider_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Note: records with PENDING status are ignored</p>
      <table className="simple-table">
        <thead>
          <tr>
            <th colSpan={3}>Query results</th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Provider ID</th>
            <th>Worked hours</th>
          </tr>
        </thead>
        <tbody>
          {queryResult.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.provider_id}</td>
              <td>{(record.total_duration / 60).toFixed(2)} ({record.total_duration}) mins</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WorkedHours;
