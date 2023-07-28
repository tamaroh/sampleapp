import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return (
    <div className="App">
      <h1>sampleapp: Stacked</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
