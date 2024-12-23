import React, { useState } from "react";
import SplashPage from "./SplashPage"; // Assuming SplashPage is in a separate file
import TodoList from "./TodoList"; // Assuming TodoList is in a separate file

const TodoApp: React.FC = () => {
  const [isSplashDone, setIsSplashDone] = useState(false);

  // Function to handle when splash animation ends
  const handleSplashEnd = () => {
    setIsSplashDone(true);
  };

  return (
    <div>
      {!isSplashDone ? (
        <SplashPage onAnimationEnd={handleSplashEnd} />
      ) : (
        <TodoList />
      )}
    </div>
  );
};

export default TodoApp;
