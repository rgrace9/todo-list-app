import React, { ReactNode } from "react";
import "./Dialog.css";
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
        <button className="close-button" onClick={onClose} />
        <div className="dialog__header">{header}</div>
        <div className="dialog__content">{children}</div>
        <div className="dialog__footer">{footer}</div>
      </div>
    </>
  );
};

export default Dialog;
