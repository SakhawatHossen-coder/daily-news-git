import React from "react";
import LoginComp from "./smallComp/LoginComp";
import FindUs from "./smallComp/FindUs";
import QzoneCard from "./smallComp/QzoneCard";

const RightSideNavbar = () => {
  return (
    <div className="">
      {/* Login With */}
      <div className="mb-6">
        <LoginComp />
      </div>
      {/* find us  */}
      <div className="mb-6">
        <FindUs />
      </div>
      {/* Q Zone */}
      <div>
        <QzoneCard />
      </div>
    </div>
  );
};

export default RightSideNavbar;
