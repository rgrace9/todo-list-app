import React from "react";
import { Task } from "../types/Task"; // Import Task type
import "./TodoList.css"; // Assuming the CSS is stored here
interface TasksListProps {
  tasks: Task[];
  removeTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void; // Function to toggle completion state
}

const TasksList: React.FC<TasksListProps> = ({
  tasks,
  removeTask,
  toggleTaskCompletion,
}) => {
  return (
    <div>
      <ul className="list">
        {tasks.map((task, index) => (
          <li key={index} className="task">
            <div className="task__content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)} // Toggle completion when checked
                className="task__checkbox"
                id={task.id}
                name={task.id}
              />
              <label data-content={task.title} htmlFor={task.id}>
                {task.title}
              </label>
            </div>
            {task.description && (
              <p className="task__description">{task.description}</p>
            )}
            <div className="task__footer">
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
