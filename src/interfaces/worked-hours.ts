// for the DB
export interface WorkedHoursRecord {
  id: string;
  duration: number;
  date: string;
  status: 'APPROVED' | 'SUBMITTED' | 'PENDING';
  provider_id: string;
}

// for the UI model
export interface WorkedHoursQueryResult {
  id: string;
  date: string;
  provider_id: string;
  total_duration: number;
}
