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
      <div class="drawer drawer-mobile sidebar">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-teal-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
