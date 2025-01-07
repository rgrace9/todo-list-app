import React, { useState } from "react";
import { Task } from "../types/Task";
import "./TodoList.css";
import Dialog from "./components/Dialog/Dialog";
import Dropdown from "./components/Dropdown";
import TrashIcon from "./components/icons/TrashIcon";
interface TasksListProps {
  tasks: Task[];
  removeTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
}

const TasksList: React.FC<TasksListProps> = ({
  tasks,
  removeTask,
  toggleTaskCompletion,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setSelectedTaskId(id);
    setIsOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedTaskId) {
      removeTask(selectedTaskId);
      setIsOpen(false);
    }
  };

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
              <label
                data-content={task.title}
                htmlFor={task.id}
                className="task__title"
              >
                {task.title}
              </label>
            </div>
            {task.description && (
              <p className="task__description">{task.description}</p>
            )}
            <div className="task__footer">
              <Dropdown
                menu={[
                  <button onClick={() => handleDelete(task.id)}>
                    <TrashIcon width="14px" height="14px" />
                    Remove
                  </button>,
                ]}
              />
            </div>
          </li>
        ))}
      </ul>
      {isOpen && (
        <Dialog
          onClose={() => {
            setIsOpen(false);
          }}
          size="small"
          header={<h2>Are you sure?</h2>}
          footer={
            <div className="button-group">
              <button className="button--outline" type="button">
                Cancel
              </button>
              <button
                className="button"
                type="button"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          }
        >
          <p className="dialog__content">
            Are you sure you want to delete this task? Are you sure you want to
            delete this task? Are you sure you want to delete this task? Are you
            sure you want to delete this task? Are you sure you want to delete
            sure you want to delete this task? Are you sure you want to delete
            sure you want to delete this task? Are you sure you want to delete
            sure you want to delete this task? Are you sure you want to delete
            this task?
          </p>
        </Dialog>
      )}
    </div>
  );
};

export default TasksList;
