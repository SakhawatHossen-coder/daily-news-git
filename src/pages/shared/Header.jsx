import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
const Header = () => {
  const date = moment().format("dddd, MMMM DD, YYYY");
  return (
    <div>
      <div className="logo text-center">
        <img src={logo} alt="" className="mx-auto" />
        <p className="text-xl">{date}</p>
      </div>
    </div>
  );
};

export default Header;
