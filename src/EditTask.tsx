import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Task } from "../types/Task";
import "./App.css";
import Dialog from "./components/Dialog/Dialog";

interface EditTaskProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  editTask: (task: Task) => void;
  task?: Task;
}

const EditTask: React.FC<EditTaskProps> = ({ task, setIsOpen, editTask }) => {
  const [title, setTitle] = useState<string>(task?.title || "");
  const [description, setDescription] = useState<string>(
    task?.description || ""
  );
  const [hasError, setHasError] = useState(false);

  const titleInputRef = useRef<HTMLInputElement>(null);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call the parent function to add the task to the list
    if (!title) {
      setHasError(true);
      return;
    }
    const updatedTask = {
      ...task,
      title,
      description,
      id: task?.id || "",
      completed: task?.completed || false,
    };
    editTask(updatedTask);
    setIsOpen(false);
  };
  return (
    <Dialog
      onClose={() => {
        setIsOpen(false);
      }}
      size="small"
      header={<h2>Are you sure?</h2>}
      footer={
        <div className="button-group">
          <button
            className="button--outline"
            type="button"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cancel
          </button>
          <button className="button" type="submit" onClick={handleSubmit}>
            Edit Task
          </button>
        </div>
      }
    >
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__content">
          <p>{hasError && "Title is required"}</p>
          <label>Title*</label>
          <input
            className="form__input"
            autoFocus
            ref={titleInputRef} // Attach the ref here
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <label>Description</label>
          <textarea
            className="form__textarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={8}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault(); // Prevent form submission when Enter is pressed
                handleSubmit(e); // Submit the form when Enter is pressed
              }
            }}
          ></textarea>
        </div>
      </form>
    </Dialog>
  );
};

export default EditTask;
