import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="w-screen h-screen bg-gray-100">
        <div class="w-full py-5 px-12">
          <form action="#">
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
      </div>
    </div>
  );
};

export default Signup;
