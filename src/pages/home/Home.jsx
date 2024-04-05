import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import LeftSideNAvbar from "../shared/LeftSideNAvbar";
import RightSideNavbar from "../shared/RightSideNavbar";
import BreakingNews from "./BreakingNews";
import MiddleComp from "../shared/MiddleComp";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   fetch("/news.json")
  //     .then((res) => res.json())
  //     .then((data) => setNews(data))
  //     .catch((err) => console.error(err));
  // }, []);
  const news = useLoaderData();

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid md:grid-cols-4 gap-6">
        <div>
          <LeftSideNAvbar news={news} />
        </div>
        <div className="md:col-span-2">
          {news.slice(0, 5).map((newsComponent) => (
            <MiddleComp newssComponent={newsComponent} />
          ))}
        </div>
        <div>
          <RightSideNavbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
