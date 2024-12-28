import React, { useState } from "react";
import SplashPage from "./SplashPage";
import TodoList from "./TodoList";

const TodoApp: React.FC = () => {
  const [isSplashDone, setIsSplashDone] = useState(false);

  const handleSplashEnd = () => {
    setIsSplashDone(true);
  };

  return (
    <div className="content">
      {!isSplashDone ? (
        <SplashPage onAnimationEnd={handleSplashEnd} />
      ) : (
        <TodoList />
      )}
    </div>
  );
};

export default TodoApp;
