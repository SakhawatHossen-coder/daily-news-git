import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/user.png";
export default function Navbar() {
  const links = (
    <>
      <Link to="/">
        <li className="mr-6 btn">Home</li>
      </Link>
      <Link to="/about">
        <li className="mr-6 btn">About</li>
      </Link>
      <Link to="/career">
        <li className="mr-6 btn">Career</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-6">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={avatar} />
          </div>
        </div>
        <Link to="/login">
          <button className="btn btn-primary">Log In</button>
        </Link>
      </div>
    </div>
  );
}
