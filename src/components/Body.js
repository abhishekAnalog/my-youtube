import React from "react";
import Sidebar from "./sidebar/Sidebar";
import ButtonBar from "./ButtonBar";

const Body = () => {
  return (
    <>
      <div className="grid grid-flow-col">
        <Sidebar />
        <ButtonBar />
      </div>
    </>
  );
};

export default Body;
