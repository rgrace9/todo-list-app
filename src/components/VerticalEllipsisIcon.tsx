import React from "react";

interface TrashIconProps {
  width?: string;
  height?: string;
}

const TrashIcon: React.FC<TrashIconProps> = ({
  width = "12px",
  height = "12px",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <path d="M16 6a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm0 8a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm0 8a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
    </svg>
  );
};

export default TrashIcon;
