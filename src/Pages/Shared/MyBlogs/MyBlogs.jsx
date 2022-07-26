import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import useBlogs from "../../../Hooks/useBlogs";
import Loader from "../Loader/Loader";
import ShowBlog from "../ShowBlog/ShowBlog";
import "./MyBlogs.css";
import ShowOwnBlog from "./ShowOwnBlog";

const MyBlogs = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const [user, userLoading] = useAuthState(auth);
  // console.log(user.email, 'user')
  const [blogs] = useBlogs();

  const matchingWithMail = blogs.filter((blog) => blog.email === user.email);

  useEffect(() => {
    setMyBlogs(matchingWithMail);
  }, []);

  if (userLoading) {
    return <Loader />;
  }

  const handleDelete = (id) => {

    const confirm = window.confirm("Are you sure?");

    if(confirm){
      fetch(`http://localhost:5000/blogs/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        alert("data deleted");

        // if (result.deletedCount > 0) {
        //   // remaining blogs
        //   const remainingBlogs = blogs.filter((blog) => blog.id !== id);
        //   setMyBlogs(remainingBlogs);
        // }

      });

    }
    
  };


  return (
    <>
      <div className="my-blogs">
        <div className="container mx-auto px-4 my-10">
          <section className="text-gray-600 body-font">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                Your Posted Blogs are here!
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                You Have {myBlogs.length} Blogs.
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                You can Delete, Update and Modify your blog!
              </p>
            </div>
            {/* blog section */}
            <div className="text-gray-600 body-font">
              <div className="container px-5 mx-auto">
                <div className="md:grid grid-cols-4 gap-4">
                  {myBlogs.map((blog) => (
                    <ShowOwnBlog
                      key={blog._id}
                      blog={blog}
                      handleDelete={handleDelete}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MyBlogs;
