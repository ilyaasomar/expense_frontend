import React, { useEffect } from "react";
import classNames from "classnames";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FcBullish } from "react-icons/fc";
import { HiOutlineLogout } from "react-icons/hi";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../lib/constants";
import { setLogout } from "../redux/services/authSlice";
import { useDispatch } from "react-redux";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-gray-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const andleLogout = () => {
    dispatch(setLogout());
    navigate("/signin");
  };
  return (
    <div className="bg-gray-800 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        {/* <FcBullish fontSize={24} /> */}
        <Link to="/">
          <img src={logo} alt="" className="w-24" />
          {/* <span className="text-white text-lg cursor-pointer">Hirsad</span> */}
        </Link>
      </div>
      <div className="py-5 flex flex-1 flex-col gap-2">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div
          className={classNames(linkClass, "cursor-pointer text-red-500")}
          onClick={andleLogout}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? "bg-gray-700 text-white" : "text-white",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}

export default Sidebar;
