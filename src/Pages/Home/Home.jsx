import React from "react";
import useBlogs from "../../Hooks/useBlogs";
import Loader from "../Shared/Loader/Loader";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./Home.css";
import ShowBlog from "../Shared/ShowBlog/ShowBlog";
import Blog from "../Blog/Blog";
import Hero from "../Shared/Hero/Hero";


const Home = () => {
  const [blogs] = useBlogs();
  // const sliceBlogs = blogs.slice(0, 3);
  // console.log(sliceBlogs)

  return (
    <>
      <Hero></Hero>
    {/* <Blog></Blog> */}

    </>
  );
};

export default Home;
