import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center  px-10 py-4 mx-32">
        <div>
          {" "}
          <Link href="/">My Home</Link>
        </div>
        <div className="flex gap-10">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
