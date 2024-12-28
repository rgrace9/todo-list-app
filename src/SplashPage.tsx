import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./SplashPage.css";

interface SplashPageProps {
  onAnimationEnd: () => void; // Callback to notify parent when the animation is done
}

const SplashPage: React.FC<SplashPageProps> = ({ onAnimationEnd }) => {
  const [showContent, setShowContent] = useState(false);

  console.log("splash");

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  useEffect(() => {
    // Step 1: Animate "TODO LIST" text
    const textTimer = setTimeout(() => {
      setShowContent(true);
      // Step 2: Render the checkbox and check it
      setTimeout(() => {
        setCheckboxChecked(true); // Simulate the checkbox being checked
      }, 1000); // Delay for checkbox animation after text animation
    }, 2000); // 2 seconds after the "TODO LIST" animation starts

    // Step 3: Call onAnimationEnd() after the checkbox animation
    const checkboxTimer = setTimeout(() => {
      onAnimationEnd(); // Notify parent when checkbox animation finishes
    }, 4000); // 4 seconds after the "TODO LIST" text animation to call onAnimationEnd()

    return () => {
      clearTimeout(textTimer);
      clearTimeout(checkboxTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <h1 className="todo-list">
          <span className="letter" style={{ animationDelay: "0s" }}>
            T
          </span>
          <span className="letter" style={{ animationDelay: "0.1s" }}>
            O
          </span>
          <span className="letter" style={{ animationDelay: "0.2s" }}>
            D
          </span>
          <span className="letter" style={{ animationDelay: "0.3s" }}>
            O
          </span>
          <span className="space"> </span>
          <span className="letter" style={{ animationDelay: "0.4s" }}>
            L
          </span>
          <span className="letter" style={{ animationDelay: "0.5s" }}>
            I
          </span>
          <span className="letter" style={{ animationDelay: "0.6s" }}>
            S
          </span>
          <span className="letter" style={{ animationDelay: "0.7s" }}>
            T
          </span>
        </h1>
        <CSSTransition
          in={showContent}
          timeout={500} // Duration of the transition
          classNames="checkbox" // Define CSS class names for the transition
          unmountOnExit
        >
          <div className="checkbox-content">
            {/* Show the checkbox after the text animation */}
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={checkboxChecked}
                onChange={() => {}}
                className="checkbox"
              />
              <span className="checkmark" />
              Task Completed
            </label>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default SplashPage;
