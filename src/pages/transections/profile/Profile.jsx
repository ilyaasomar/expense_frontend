import React from "react";

const Profile = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <div className="bg-gray-100 min-h-screen px-auto mx-auto">
      <div className="flex justify-between p-4">
        <h2 className="font-bold text-xl">Profile</h2>
      </div>
      <div className="p-4 flex justify-center items-center">
        <div className="w-[50%] h-[65vh] flex flex-col items-center pb-4 border rounded-lg bg-white overflow-y-auto">
          {/* starting form */}
          <div className="w-full flex justify-center py-0 px-12 md:px-3">
            <form onSubmit={handleSubmit}>
              {/* image */}
              <div className="mt-5 grid grid-cols-1 gap-3 pb-7 w-[700px]">
                <div className="flex justify-center items-center">
                  <img
                    src={
                      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                    }
                    alt=""
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
              </div>
              <hr className="pb-3" />
              <div className="mb-6 mt-10">
                <input
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  id="fullname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="number"
                  name="phone"
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="***********"
                  required
                />
              </div>

              <div className="mt-5 w-44">
                <button
                  type="submit"
                  className="w-full bg-blue-500 py-3 text-center text-white rounded-md"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
          {/* ending form */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
