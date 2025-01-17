import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Task } from "../types/Task";
import AddTask from "./AddTask";
import "./App.css";
import TasksList from "./TasksList";
const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {
  weekday: "long", // Full day of the week
  month: "long", // Full month name
  day: "numeric", // Day of the month as a number
  year: "numeric", // Full year
});

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = (task: Task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const removeTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div>
        <h1 className="heading">Today</h1>
        <p>{formattedDate}</p>
        <p>
          {tasks.length} task{tasks.length !== 1 && "s"}
        </p>
      </div>
      <div>
        {tasks.length > 0 && (
          <TasksList
            toggleTaskCompletion={toggleTaskCompletion}
            removeTask={removeTask}
            editTask={editTask}
            tasks={tasks}
          />
        )}
        {/* CSSTransition to animate button disappearance */}
        <CSSTransition
          in={!showAddTask}
          timeout={100}
          classNames="button"
          unmountOnExit
        >
          <button
            className="button"
            onClick={() => setShowAddTask((prevValue) => !prevValue)}
          >
            Add Task
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
