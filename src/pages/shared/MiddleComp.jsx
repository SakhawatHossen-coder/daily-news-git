import React from "react";
import MiddleNav from "./smallComp/MiddleNav";
import { Link } from "react-router-dom";

const MiddleComp = ({ newssComponent }) => {
  const { title, _id, author, thumbnail_url, details } = newssComponent;
  return (
    <div>
      <MiddleNav newssComponent={newssComponent} />
      {/* card  */}
      <Link to={`/news/${_id}`}>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={thumbnail_url} alt={title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{details.slice(0, 200)}...</p>
            <div className="card-actions justify-end">
              <div className="badge">Author: {author.name}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MiddleComp;
