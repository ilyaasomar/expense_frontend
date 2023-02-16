import React from "react";

const ElementForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Orders</h2>
        <h2>Welcome Back, Ilyas</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          {/* starting form */}
          <div class="w-full py-5 px-12">
            <form action="#">
              <div class="grid grid-cols-1 gap-3 w-[700px]">
                <label htmlFor="Firstname" className="font-medium">
                  Full Name:
                </label>
                <input
                  type="text"
                  placeholder="Firstname"
                  class="border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>
              <div class="mt-5 grid grid-cols-1 gap-3 w-[700px]">
                <label htmlFor="Firstname" className="font-medium">
                  Gender
                </label>
                <select className="border border-gray-400 py-2 px-3 rounded-md">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div class="mt-5 grid grid-cols-1 gap-3 w-[700px]">
                <label htmlFor="Firstname" className="font-medium">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  class="border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>
              <div class="mt-5 grid grid-cols-1 gap-3 w-[700px]">
                <label htmlFor="Firstname" className="font-medium">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  class="border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>
              <div class="mt-5 grid grid-cols-1 gap-3 w-[700px]">
                <label htmlFor="Firstname" className="font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  class="border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>
              <div class="mt-5 grid grid-cols-1 gap-3 w-[700px]">
                <label htmlFor="Firstname" className="font-medium">
                  Confirm Password
                </label>
                <input
                  type="date"
                  class="border border-gray-400 py-2 px-3 rounded-md"
                />
              </div>

              <div class="mt-5 w-32">
                <button class="w-full bg-blue-500 py-3 text-center text-white rounded-md">
                  Register Now
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

export default ElementForm;
