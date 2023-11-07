import './App.css';
import AlternativeMondays from './task-1/AlternativeMondays';
import Calendar from './task-2/Calendar';
import WorkedHours from './task-3/WorkedHours';

function App() {
  return (
    <>
      <p>Things I was planning on adding but unfortunately didn't have the time:</p>
      <ul>
        <li>Unit tests</li>
        <li>CSS modules for maintainable styles</li>
        <li>Adding animations and transitions</li>
        <li>TypeScript in all elements (I'm not setting types for components props, for instance)</li>
      </ul>
      <div>
        <AlternativeMondays />
        <Calendar />
        <WorkedHours />
      </div>
    </>
  )
}

export default App
