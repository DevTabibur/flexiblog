import React from "react";
import useBlogs from "../../Hooks/useBlogs";
import Loader from "../Shared/Loader/Loader";
import SingleBlog from "../SingleBlog/SingleBlog";
import "./Home.css";
import ShowBlog from "../Shared/ShowBlog/ShowBlog";

const Home = () => {
  const [blogs] = useBlogs();
  // const sliceBlogs = blogs.slice(0, 3);
  // console.log(sliceBlogs)

  return (
    <>
      <div
        class="hero min-h-screen"
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
