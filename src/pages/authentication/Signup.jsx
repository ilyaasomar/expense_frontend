import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup, clearError } from "../../redux/services/authSlice";

const Signup = () => {
  const { error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    // profilePic: "",
  });
  useEffect(() => {
    error &&
      toast.error(error, {
        position: "top-right",
        autoClose: 1000,
      });
    dispatch(clearError());
  }, [error, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      toast.error("Password and confirmation password do not match", {
        position: "top-right",
        autoClose: 1000,
      });
      return;
    }
    dispatch(signup({ userData, toast, navigate }));
    console.log(userData);
  };
  return (
    <div className="flex w-screen h-screen bg-gray-100">
      <div className="flex justify-center items-center w-[50%] bg-white mx-auto my-64 md:my-20 rounded-xl">
        <div className="w-full px-10 py-10">
          <form onSubmit={handleSubmit}>
            <h1 className="font-medium text-3xl text-center">Sign Up</h1>
            <div className="mb-6 mt-10">
              <input
                type="text"
                name="name"
                onChange={(e) => setUser({ ...userData, name: e.target.value })}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="number"
                name="phone"
                onChange={(e) =>
                  setUser({ ...userData, phone: e.target.value })
                }
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="+25261 XXXXXXX"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                onChange={(e) =>
                  setUser({ ...userData, email: e.target.value })
                }
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="admin@hirsad.com"
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                name="password"
                onChange={(e) =>
                  setUser({ ...userData, password: e.target.value })
                }
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="***********"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="confirmPassword"
                onChange={(e) =>
                  setUser({ ...userData, confirmPassword: e.target.value })
                }
                id="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="***********"
                required
              />
            </div>
            {/* <div className="mb-6">
              <input
                type="file"
                name="profilePic"
                onChange={(e) =>
                  setUser({ ...userData, profilePic: e.target.files[0] })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div> */}

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
            <Link to="/signin" className="ml-6">
              i have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
