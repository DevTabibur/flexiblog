import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBlog,
  faMarker,
  faUsers,
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";


const Dashboard = () => {
  const menu = [
    <>
      <li className="my-1 font-semibold">
      <Link to="/dashboard/profile"><FontAwesomeIcon className="" icon={faUser}/> PROFILE</Link>
      </li>
      <li className="my-1 font-semibold">
        <Link to="/dashboard/post-blog"><FontAwesomeIcon className="" icon={faUpload}/> POST BLOG</Link>
      </li>
      <li className="my-1 font-semibold">
        <Link to="/dashboard/update-profile"><FontAwesomeIcon className="" icon={faMarker}/> UPDATE PROFILE</Link>
      </li>
      <li className="my-1 font-semibold">
        <Link to="/dashboard/users"><FontAwesomeIcon className="" icon={faUsers}/> USERS</Link>
      </li>
      <li className="my-1 font-semibold">
        <Link to="/dashboard/my-blogs"><FontAwesomeIcon className="" icon={faBlog}/> MY BLOGS</Link>
      </li>
    </>,
  ];
  return (
    <div className="">
      <div className="drawer drawer-mobile sidebar">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full md:m-5">
          {/* <!-- Page content here --> */}
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto  bg-teal-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
