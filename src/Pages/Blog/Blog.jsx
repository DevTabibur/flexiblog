import React from "react";
import ShowBlog from "../Shared/ShowBlog//ShowBlog";
import Loader from "../Shared/Loader/Loader";
import "./Blog.css";
import { useQuery } from "react-query";
import useBlogs from "../../Hooks/useBlogs";

const Blog = () => {

const [blogs]= useBlogs();

  return (
    <div className="container mx-auto px-4 my-10">
      <section class="text-gray-600 body-font">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            All Blogs are here!
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Find Blogs, Read Blogs, Write Blogs, Rate Blogs!!
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            You can read blogs here, also you can write blogs here. It's all
            free..!
          </p>
        </div>
        {/* blog section */}
        <div class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="md:grid grid-cols-4 gap-4">
          {blogs.map((blog) => (
          <ShowBlog key={blog._id} blog={blog} />
        ))}
          </div>
        </div>
      </div>
        
      </section>
    </div>
  );
};

export default Blog;
