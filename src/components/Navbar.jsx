import { NavLink } from "react-router-dom";
import Wrapper from "./Wrapper";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 ${
              isActive
                ? " text-[#0059B1] hover:underline hover:bg-inherit  text-lg"
                : "text-black hover:underline hover:bg-inherit text-lg"
            }`
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/buyer"
          className={({ isActive }) =>
            `flex items-center gap-3 ${
              isActive
                ? " text-[#0059B1] hover:underline hover:bg-inherit text-lg"
                : "text-black hover:underline hover:bg-inherit text-lg"
            }`
          }>
          Buyer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/search-result"
          className={({ isActive }) =>
            `flex items-center gap-3 ${
              isActive
                ? " text-[#0059B1] hover:underline  hover:bg-inherit  text-lg"
                : "text-black hover:underline hover:bg-inherit text-lg"
            }`
          }>
          Search Result
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/details"
          className={({ isActive }) =>
            `flex items-center gap-3 ${
              isActive
                ? " text-[#0059B1] hover:underline hover:bg-inherit  text-lg"
                : "text-black hover:underline hover:bg-inherit text-lg"
            }`
          }>
          Details
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center gap-3 ${
              isActive
                ? " text-[#0059B1] hover:underline hover:bg-inherit  text-lg"
                : "text-black hover:underline hover:bg-inherit text-lg"
            }`
          }>
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-[#ECF5FF] w-full">
      <Wrapper>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks}
              </ul>
            </div>
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
          </div>
          <div className="navbar-center">
            <img className="h-16" src={logo} alt="" />
          </div>
          <div className="navbar-end">
            <p className="hover:underline hover:cursor-pointer text-lg">
              Sign In
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
