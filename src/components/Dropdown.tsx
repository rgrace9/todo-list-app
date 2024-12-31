import React, { useEffect, useRef, useState } from "react";
import "./Dropdown.css";
interface DropdownProps {
  menu: React.ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        aria-label={isOpen ? "Close Dropdown" : "Open Dropdown"}
        className="dropdown__button"
      >
        <div className="ellipsis">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
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
