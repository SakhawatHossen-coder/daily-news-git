import React from "react";
import MiddleNav from "./smallComp/MiddleNav";

const MiddleComp = ({ newssComponent }) => {
  return (
    <div>
      <MiddleNav newssComponent={newssComponent} />
    </div>
  );
};

export default MiddleComp;
