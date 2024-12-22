import { useState } from "react";
import AddTask from "./AddTask";
import "./App.css";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <>
      <h1>Today</h1>
      <div>
        {showAddTask ? (
          <AddTask setShowAddTask={setShowAddTask} />
        ) : (
          <button onClick={() => setShowAddTask((prevValue) => !prevValue)}>
            Add Task
          </button>
        )}
      </div>
    </>
  );
}

export default App;
