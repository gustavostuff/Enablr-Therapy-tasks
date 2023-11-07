
import { useEffect, useState } from "react";
import { WorkedHoursQueryResult } from "../interfaces/worked-hours";
import { queryDb, data } from "../services/worked-hours.service";
import DataSourceTable from "./DataSourceTable";
import QueryResultsTable from "./QueryResultsTable";

function WorkedHours() {
  const [queryResult, setQueryResult] = useState<WorkedHoursQueryResult[]>([]);

  useEffect(() => {
    const result: WorkedHoursQueryResult[] = queryDb();

    setQueryResult(result);
  }, []);

  return (
    <div className="container">
      <h1>Task 3</h1>
      <DataSourceTable data={data} />
      <p>Note: records with PENDING status are ignored</p>
      <QueryResultsTable queryResult={queryResult} />
      <pre>
{`SELECT
  date,
  provider_id,
  SUM(duration) as total_duration
FROM
  ?
WHERE
  status <> 'PENDING'
GROUP BY
  date, provider_id
ORDER BY
  date, provider_id`}
      </pre>
      <p>This query can be found in <b>worked-hours.service.ts</b></p>
    </div>
  )
}

export default WorkedHours;
