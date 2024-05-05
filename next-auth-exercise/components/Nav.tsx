"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
const Nav = () => {
  const { data: session } = useSession();
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center  px-10 py-4 mx-32">
        <div>
          {" "}
          <Link href="/">My Home</Link>
        </div>
        <div className="flex gap-10 items-center">
          <Link href="/dashboard">Dashboard</Link>
          {!session ? (
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">Register</Link>
            </>
          ) : (
            <>
              {session.user?.email}
              <button
                onClick={() => signOut()}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Sign out
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
