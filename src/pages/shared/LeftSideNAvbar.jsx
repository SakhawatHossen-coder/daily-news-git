import React, { useEffect, useState } from "react";
import CategoryLinks from "./smallComp/CategoryLinks";
import BottomCard from "./smallComp/BottomCard";

const LeftSideNAvbar = () => {
  //
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error(err));
  }, []);
  //
  return (
    <div>
      <h2 className="text-3xl font-bold">All Category</h2>
      <div className="cate">
        {categories.map((category) => (
          <CategoryLinks key={category.id} category={category} />
        ))}
      </div>
      <div className="bottom-card my-10">
        {news.slice(0, 3).map((newsData) => (
          <BottomCard key={newsData.id} newsData={newsData} />
        ))}
      </div>
    </div>
  );
};

export default LeftSideNAvbar;
