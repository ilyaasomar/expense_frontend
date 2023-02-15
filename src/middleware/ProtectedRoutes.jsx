import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import RedirectToLogin from "./RedirectToLogin";
const ProtectedRoutes = ({ children }) => {
  // if you get user data from state the problem is when refreshing page will redirect you to login page
  //   const { user } = useSelector((state) => state.user);

  //   get it from localStorage instead of state
  const token = localStorage.getItem("user");
  if (!token) {
    return <Navigate to="/signin" replace={true} />;
  }
  return children;
};

export default ProtectedRoutes;
