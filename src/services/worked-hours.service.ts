import alasql from "alasql";
import { WorkedHoursRecord } from "../interfaces/worked-hours";

export const data: WorkedHoursRecord[] = [
  {
    "id": "1",
    "duration": 60,
    "date": "2023-08-14",
    "status": "APPROVED",
    "provider_id": "60bd043b11"
  },
  {
    "id": "2",
    "duration": 30,
    "date": "2023-08-10",
    "status": "APPROVED",
    "provider_id": "60bd043b12"
  },
  {
    "id": "3",
    "duration": 45,
    "date": "2023-08-14",
    "status": "SUBMITTED",
    "provider_id": "60bd043b11"
  },
  {
    "id": "4",
    "duration": 15,
    "date": "2023-08-14",
    "status": "PENDING",
    "provider_id": "60bd043b13"
  },
  {
    "id": "5",
    "duration": 30,
    "date": "2023-08-12",
    "status": "APPROVED",
    "provider_id": "60bd043b12"
  },
  {
    "id": "6",
    "duration": 20,
    "date": "2023-08-15",
    "status": "APPROVED",
    "provider_id": "60bd043b14"
  },
  {
    "id": "7",
    "duration": 50,
    "date": "2023-08-16",
    "status": "SUBMITTED",
    "provider_id": "60bd043b15"
  },
  {
    "id": "8",
    "duration": 40,
    "date": "2023-08-17",
    "status": "APPROVED",
    "provider_id": "60bd043b16"
  }
];

export const queryDb = () => {
  return alasql(`
    SELECT
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
      date, provider_id
    `, [data]
  );
}
