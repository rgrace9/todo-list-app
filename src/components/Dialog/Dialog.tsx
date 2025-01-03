import React from "react";

interface DialogProps {
  onClose: (value: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({ onClose }) => {
  return (
    <section>
      <div className="backdrop" onClick={() => onClose(false)}></div>
      <div className="dialog">
        <button className="close-button" onClick={() => onClose(false)}>
          Close
        </button>
      </div>
    </section>
  );
};

export default Dialog;
