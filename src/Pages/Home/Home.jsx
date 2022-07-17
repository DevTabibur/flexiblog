import React from "react";
import useBlogs from "../../Hooks/useBlogs";
import Loader from "../Shared/Loader/Loader";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./Home.css";
import ShowBlog from "../Shared/ShowBlog/ShowBlog";

const Home = () => {


  return (
    <>
      <div className="container mx-auto px-4 my-10">
      <div className="md:flex flex-row  gap-4">
        <div className="basis-3/4">
          {/* <ShowBlog/> */}
          This is home page
        </div>
        <div className="basis-2/4">
          
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
