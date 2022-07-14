import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = ({ children }) => {
  const menu = [
    <>
      <li>
        <NavLink to="/" className="roounded-lg m-2">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="roounded-lg m-2">
          BLOG
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="roounded-lg m-2">
          CONTACT
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="roounded-lg m-2">
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className="roounded-lg m-2">
          LOGIN
        </NavLink>
      </li>
      <li class="dropdown dropdown-hover">
        <label tabindex="0" class="btn btn-outline  m-2">
          Hover
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu shadow bg-base-100 mt-3"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </li>
    </>,
  ];
  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-white shadow">
            <div className="container mx-auto px-4">
              <div className="flex-1 px-2 mx-2 text-2xl">FlexiBlog</div>

              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* <!-- Navbar menu content here --> */}
                  {menu}
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {menu}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
