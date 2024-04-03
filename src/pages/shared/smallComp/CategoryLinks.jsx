import React from "react";
import { Link } from "react-router-dom";

const CategoryLinks = ({ category }) => {
  return (
    <div>
      <Link className="font-semibold mb-6" to={`/category/${category.id}`}>
        {category.name}
      </Link>
    </div>
  );
};

export default CategoryLinks;
