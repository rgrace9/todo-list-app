import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import AddTask from "./AddTask";
import "./App.css";
import TasksList from "./TasksList";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState<
    { title: string; description: string; id: string; completed: boolean }[]
  >([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Function to add a new task
  const addTask = (task: {
    title: string;
    description: string;
    id: string;
    completed: boolean;
  }) => {
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
      </div>
    </>
  );
}

export default App;
