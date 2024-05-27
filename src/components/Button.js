import React from "react";

const Button = ({ title }) => {
  console.log("Button", title);
  return <button className="p-2 m-2 border hover:bg-gray-400 rounded">{title}</button>;
};

export default Button;
