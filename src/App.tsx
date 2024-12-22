import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import AddTask from "./AddTask";
import "./App.css";
import TasksList from "./TasksList";

function App() {
  const [count, setCount] = useState(0);
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState<{ title: string; description: string }[]>(
    []
  );

  const addTask = (task: { title: string; description: string }) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <>
      <div>
        <h1>Today</h1>
        <p>{tasks.length} tasks</p>
      </div>
      <div>
        {tasks.length > 0 && <TasksList tasks={tasks} />}
        {/* CSSTransition to animate button disappearance */}
        <CSSTransition
          in={!showAddTask}
          // timeout={100}
          classNames="button"
          unmountOnExit
        >
          <button onClick={() => setShowAddTask((prevValue) => !prevValue)}>
            {"Add Task"}
          </button>
        </CSSTransition>

        {/* Wrap the AddTask component in a CSSTransition */}
        <CSSTransition
          in={showAddTask}
          timeout={300} // Transition duration in ms
          classNames="add-task"
          unmountOnExit
        >
          <div>
            <AddTask addTask={addTask} setShowAddTask={setShowAddTask} />
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default App;
