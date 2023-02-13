import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import RedirectToLogin from "./RedirectToLogin";
const ProtectedRoutes = ({ children }) => {
  // if you get user data from state the problem is when refreshing page will redirect you to login page
  //   const { user } = useSelector((state) => state.user);

  //   get it from localStorage instead of state
  const user = JSON.parse(localStorage.getItem("user"));
  // useEffect(() => {
  //     if (!user) {
  //   <Navigate to="/signin" />;
  //     }
  // }, []);
  // return user ? children : <Navigate to="/signin" />;
  return user ? children : <RedirectToLogin />;
};

export default ProtectedRoutes;
