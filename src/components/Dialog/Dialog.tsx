import React, { ReactNode } from "react";

interface DialogProps {
  onClose: () => void;
  footer?: ReactNode;
  header?: ReactNode;
  children: ReactNode;
  size: "small" | "medium" | "large";
}

const Dialog: React.FC<DialogProps> = ({
  onClose,
  size,
  header,
  footer,
  children,
}) => {
  const className = `dialog ${size}`;
  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <div className={className}>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <div className="header">{header}</div>
        <div className="content">{children}</div>
        <div className="footer">{footer}</div>
      </div>
    </>
  );
};

export default Dialog;
