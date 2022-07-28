// demo 1 https://flexiblog-education.netlify.app/
// demo 2 https://atixscripts.info/demo/html/minimag/index-13.html#
// demo 3 https://decrypt.co/author/mathewdisalvo
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import Register from "./Pages/Shared/Register/Register";
import Login from "./Pages/Shared/Login/Login";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PostBlog from "./Pages/Shared/PostBlog/PostBlog";
import Profile from "./Pages/Shared/Profile/Profile";
import UpdateProfile from "./Pages/Shared/UpdateProfile/UpdateProfile";
import Users from "./Pages/Shared/Users/Users";
import MyBlogs from "./Pages/Shared/MyBlogs/MyBlogs";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAdmin from "./Pages/Shared/RequireAdmin/RequireAdmin";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          {/* dashboard */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index path="profile" element={<Profile />}></Route>

            <Route path="post-blog" element={<PostBlog />}></Route>
            <Route path="update-profile" element={<UpdateProfile />}></Route>

            <Route path="users" element={<Users />}></Route>

            <Route path="my-blogs" element={<MyBlogs />}></Route>
          </Route>
          {/* load single blog */}
          <Route path="/blog/:id" element={<SingleBlog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Header>
        {/* <Footer></Footer> */}

      
      <ToastContainer />
    </>
  );
}

export default App;
