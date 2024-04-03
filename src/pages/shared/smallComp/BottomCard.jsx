import React from "react";

const BottomCard = ({ newsData }) => {
  const { title, image_url, author } = newsData;
  return (
    <div className="card w-64 bg-base-100 shadow-xl my-6">
      <figure>
        <img src={image_url} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-end">
          <div className="badge">category</div>
          <div className="badge">
            date: {author.published_date.split(" ").slice(0, 1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
