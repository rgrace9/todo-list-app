import React, { useState } from "react";
import "./Dropdown.css";

interface DropdownProps {
  menu: React.ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        {isOpen ? "Close Dropdown" : "Open Dropdown"}
      </button>
      {isOpen && (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {menuItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
