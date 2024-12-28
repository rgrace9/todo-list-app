import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Task } from "../types/Task"; // Import Task type
import AddTask from "./AddTask";
import "./App.css";
import SampleTodoList from "./SampleTodoList";
import TasksList from "./TasksList";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Function to add a new task
  const addTask = (task: Task) => {
    // const updatedTasks = [...tasks, task];
    setTasks((prevTasks) => [...prevTasks, task]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Function to remove a task
  const removeTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
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
        <h1>Today</h1>
        <p>
          {tasks.length} task{tasks.length !== 1 && "s"}
        </p>
      </div>
      <div>
        {tasks.length > 0 && (
          <TasksList
            toggleTaskCompletion={toggleTaskCompletion}
            removeTask={removeTask}
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
        <SampleTodoList />
      </div>
    </>
  );
}

export default App;
