import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-[#212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8 text-white">
          Register
        </h1>

        <form>
          <div>
            <input
              type="text"
              id="email"
              placeholder="Email"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              required
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              required
            />
          </div>

          <div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center text-gray-500 mt-3">- OR -</div>
        <Link
          className="block text-center text-blue-500 hover:underline mt-3"
          href="/login"
        >
          Login with an existing account
        </Link>
      </div>
    </div>
  );
};

export default Page;
