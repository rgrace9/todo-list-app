import React, { useEffect, useState } from "react";
import "./SplashPage.css";

interface SplashPageProps {
  onAnimationEnd: () => void; // Callback to notify parent when the animation is done
}

const SplashPage: React.FC<SplashPageProps> = ({ onAnimationEnd }) => {
  const [showContent, setShowContent] = useState(false);

  console.log("splash");
  useEffect(() => {
    // Set a timeout to trigger the content transition after the animation
    setTimeout(() => {
      setShowContent(true);
      onAnimationEnd(); // Notify parent when animation ends
    }, 3000); // 3 seconds after the animation starts
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
        {showContent && (
          <div className="next-content">
            {/* The content after animation finishes */}
            <h2>Welcome to your Todo List</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SplashPage;
