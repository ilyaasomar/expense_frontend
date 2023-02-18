import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearError, signin } from "../../redux/services/authSlice";

const Signin = () => {
  const { error, loading } = useSelector((state) => state.user);
  const [userData, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    error &&
      toast.error(error, {
        position: "top-right",
        autoClose: 1000,
      });
    dispatch(clearError());
  }, [error, dispatch]);

  const handleInput = (event) => {
    setUser({ ...userData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin({ userData, toast, navigate }));
  };
  return (
    <div className="flex w-screen h-screen bg-gray-100">
      <div className="flex justify-center items-center w-[50%] bg-white mx-auto my-64 md:my-20 rounded-xl">
        <div className="w-full px-10 py-10">
          <form onSubmit={handleSubmit}>
            <h1 className="font-medium text-3xl text-center">Signin</h1>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="admin@hirsad.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                id="password"
                placeholder="***************"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Signin
            </button>
            <Link to="/signup" className="ml-6">Not have an account?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
