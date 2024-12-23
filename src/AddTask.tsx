import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Task } from "../types/Task"; // Import Task type
import "./App.css";

interface AddTaskProps {
  setShowAddTask: Dispatch<SetStateAction<boolean>>;
  addTask: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ setShowAddTask, addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleInputRef = useRef<HTMLInputElement>(null);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call the parent function to add the task to the list
    addTask({ title, description, id: `${Date.now()}`, completed: false });
    // Reset form values and close the form
    setTitle("");
    setDescription("");
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__content">
        <label>Title</label>
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
          //   onKeyDown={(e) => {
          //     if (e.key === "Enter" && !e.shiftKey) {
          //       e.preventDefault(); // Prevent form submission when Enter is pressed
          //       handleSubmit(e); // Submit the form when Enter is pressed
          //     }
          //   }}
        ></textarea>
      </div>
      <div className="form__footer">
        <button
          onClick={() => {
            setShowAddTask(false);
          }}
          type="button"
        >
          Cancel
        </button>
        <button type="submit" onClick={handleSubmit}>
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTask;
