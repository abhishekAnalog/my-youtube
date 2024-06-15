import React, { useRef } from "react";

const Button = ({ title }) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      className="p-2 m-2 border hover:bg-gray-400 rounded"
      onClick={handleClick}
      ref={ref}
    >
      {title}
    </button>
  );
};

export default Button;
