import React from "react";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { id } = useParams();
  return (
    <div>
      NewsPage
      <p>{id}</p>
    </div>
  );
};

export default NewsPage;
