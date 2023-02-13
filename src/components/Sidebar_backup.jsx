import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ViewListIcon from "@mui/icons-material/ViewList";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
const Sidebar = () => {
  return (
    <div className="w-72 bg-gray-700 h-screen">
      <div className="p-4">
        {/* logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center bg-white rounded-full w-10 h-10">
            <h1 className="font-bold">HIT</h1>
          </div>
          <h1 className="text-white text-2xl font-bold">Admin</h1>
        </div>
        {/* menu list */}
        <div className="flex flex-col">
          <ul className="px-3 py-10 space-y-5 text-white text-md font-semibold">
            <li>
              <Link to="/" className="flex gap-3 items-center cursor-pointer">
                <span>
                  <Dashboard className="" />
                </span>
                <h3>Dashboard</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/customers"
                className="flex gap-3 items-center cursor-pointer"
              >
                <span>
                  <PeopleAltIcon />
                </span>
                <h3>Create Customer</h3>
              </Link>
              
            </li>
            <li>
              <Link
                to="/customers"
                className="flex gap-3 items-center cursor-pointer"
              >
                <span>
                  <PeopleAltIcon />
                </span>
                <h3>All Customers</h3>
              </Link>
              
            </li>
            <li>
              <Link
                to="/transections"
                className="flex gap-3 items-center cursor-pointer"
              >
                <span>
                  <CurrencyExchangeIcon />
                </span>
                <h3>Transections</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/all_transections"
                className="flex gap-3 items-center cursor-pointer"
              >
                <span>
                  <ViewListIcon className="" />
                </span>
                <h3>All Transection</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/history"
                className="flex gap-3 items-center cursor-pointer"
              >
                <span>
                  <HistoryIcon className="" />
                </span>
                <h3>Transection History</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className="flex gap-3 items-center cursor-pointer"
              >
                <span>
                  <FileCopyIcon className="" />
                </span>
                <h3>Reports</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex gap-3 items-center cursor-pointer"
              >
                <span>
                  <SettingsIcon className="" />
                </span>
                <h3>Settings</h3>
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="flex gap-3 items-center cursor-pointer"
              >
                <span>
                  <LogoutIcon className="" />
                </span>
                <h3>Logout</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
