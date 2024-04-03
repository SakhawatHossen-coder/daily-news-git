import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex">
      <div className="btn btn-neutral">BreakingNews</div>
      <Marquee pauseOnHover={true}>
        <Link className="mr-10">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-10">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
        <Link className="mr-10">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
