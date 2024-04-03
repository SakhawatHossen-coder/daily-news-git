import React from "react";
import { FaBookBookmark, FaShare } from "react-icons/fa6";

const MiddleNav = ({ newssComponent }) => {
  //   console.log(newssComponent);
  const { author } = newssComponent;
  console.log(author.name);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={author.img} />
              <div>
                {/* <h1>{author.name ? `${author.name}` : "Name"} sas</h1> */}
                <h1>s</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>{author.name}</h1>
          <h1>{author.published_date.split(" ").slice(0, 1)}</h1>
        </div>
      </div>
      <div className="flex-none gap-4">
        <FaBookBookmark />
        <FaShare />
      </div>
    </div>
  );
};

export default MiddleNav;
