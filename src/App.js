// demo 1 https://flexiblog-education.netlify.app/
// demo 2 https://atixscripts.info/demo/html/minimag/index-13.html#
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import Register from "./Pages/Shared/Register/Register";
import Login from "./Pages/Shared/Login/Login";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";

// 
function App() {
  return (
    <>
      <Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          {/* load single blog */}
          <Route path="/blog/:id" element={<SingleBlog/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Header>
    </>
  );
}

export default App;
