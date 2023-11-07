import { WorkedHoursRecord } from "../interfaces/worked-hours";

function DataSourceTable({ data }: any) {
  return (
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
        {data.map((record: WorkedHoursRecord, index: number) => (
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
  );
}

export default DataSourceTable;
