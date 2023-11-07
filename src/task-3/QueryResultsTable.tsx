import { WorkedHoursQueryResult } from "../interfaces/worked-hours";

function QueryResultsTable({ queryResult }: any) {
  return (
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
        {queryResult.map((record: WorkedHoursQueryResult, index: number) => (
          <tr key={index}>
            <td>{record.date}</td>
            <td>{record.provider_id}</td>
            <td>
              {(record.total_duration / 60).toFixed(2)} ({record.total_duration}
              ) mins
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default QueryResultsTable;
