import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import useSingleBlog from "../../Hooks/useSingleBlog";
import "./SingleBlog.css";

const SingleBlog = () => {
  const { id } = useParams();
  const [singleBlog] = useSingleBlog(id);

  const menu = [
    <>
      <li>
        <a>Sidebar Item 1</a>
      </li>
      <li>
        <a>Sidebar Item 2</a>
      </li>
    </>,
  ];
  return (
    <div className="">
      {/* <div className="img-box">
        <img src={singleBlog?.blogImg} alt="blogImg" />
      </div> */}

      <label
        for="my-drawer-2"
        className="btn btn-primary drawer-button lg:hidden"
      >
        Open drawer
      </label>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content md:grid grid-cols-1 mx-auto pt-0 my-0 pb-10">
          {/* <!-- Page content here --> */}

          <div className="page-content overflow-auto ml-32">
            <h2 className="text-3xl font-bold">{singleBlog?.title}</h2>
            <h2 className="text-xl mb-8">{singleBlog?.description}</h2>
            <div className="author">
              <img
                className="h-50 w-50 rounded-full"
                src={singleBlog?.authorImg}
                alt="authorImg"
              />
              <span>By {singleBlog?.author}</span>
            </div>
            <div className="img-box">
              <img src={singleBlog?.blogImg} alt="blogImg" />
            </div>

            <div className="content-parra py-16">
              <p className="mt-10 text-lg">{singleBlog?.content}</p>
            </div>
          </div>
        </div>
        <div className="drawer-side shadow">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-teal-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
