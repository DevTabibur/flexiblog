import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import useBlogs from '../../../Hooks/useBlogs';
import Loader from '../Loader/Loader';
import ShowBlog from '../ShowBlog/ShowBlog';
import './MyBlogs.css'

const MyBlogs = () => {

  const [user, userLoading] = useAuthState(auth)
   const [blogs]= useBlogs();


  if(userLoading){
    return <Loader/>
  }

  return (
    <>
      <div className='my-blogs'>
        <div className="container mx-auto px-4 my-10">
      <section class="text-gray-600 body-font">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Your Posted Blogs are here!
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
          {/* {blogs.map((blog) => (
          <ShowBlog key={blog._id} blog={blog} />
        ))} */}
          </div>
        </div>
      </div>
        
      </section>
    </div>
      </div>
    </>
  )
}

export default MyBlogs