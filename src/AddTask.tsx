import { Dispatch, SetStateAction } from "react";
import "./App.css";

interface AddTaskProps {
  setShowAddTask: Dispatch<SetStateAction<boolean>>;
}

const AddTask: React.FC<AddTaskProps> = ({ setShowAddTask }) => {
  return (
    <form className="form">
      <div className="form__content">
        <label>Title</label>
        <input className="form__input"></input>
        <label>Description</label>
        <textarea className="form__textarea"></textarea>
      </div>
      <div className="form__footer">
        <button
          onClick={() => {
            setShowAddTask(false);
          }}
        >
          Cancel
        </button>
        <button>Add Task</button>
      </div>
    </form>
  );
};

export default AddTask;
