import { ChangeEvent, useEffect, useState } from 'react';
import { getAlternativeMondays } from '../shared/utils';

function AlternativeMondays() {
  const [startDate, setStartDate] = useState<string>(
    new Date().toISOString().substring(0, 10)
    );

  const [endDate, setEndDate] = useState<string>(() => {
    const result = new Date();
    result.setDate(result.getDate() + 40); // Adding 40 days
    return result.toISOString().substring(0, 10);
  });

  const [alternativeMondays, setAlternativeMondays] = useState<string[]>([]);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'startDate') {
      setStartDate(value);
      setAlternativeMondays(getAlternativeMondays(value, endDate));
    } else if (name === 'endDate') {
      setEndDate(value);
      setAlternativeMondays(getAlternativeMondays(startDate, value));
    }
  };

  useEffect(() => {
    setAlternativeMondays(getAlternativeMondays(startDate, endDate));
  }, [startDate, endDate]);

  return (
    <div className='container'>
      <h1>Task 1</h1>
      <div className='mt-1'>
        <label htmlFor="start-date" className='mt-1'>Start Date:</label>
        <input
          type="date"
          id="start-date"
          name="startDate"
          value={startDate}
          onChange={handleDateChange}
        />
      </div>
      <div className='mt-1'>
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          name="endDate"
          value={endDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <h3>Alternative Mondays in the given range (inclusive of the range limits)</h3>
        <pre>
          {JSON.stringify(alternativeMondays, null, 2)}
        </pre>
      </div>
      <p>See <b>getAlternativeMondays</b> function in shared/utils.ts</p>
    </div>
  )
}

export default AlternativeMondays;
