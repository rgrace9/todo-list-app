import React from "react";
import { Task } from "../types/Task"; // Import Task type
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
              />
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            </div>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
