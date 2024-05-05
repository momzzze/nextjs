"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

const Page = () => {
  const [error, setError] = useState("");
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") router.replace("/dashboard");
  }, [session, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Invalid email");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-[#212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8 text-white">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
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
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          </div>
          <div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="text-center text-gray-500 mt-3">- OR -</div>

        <Link
          className="block text-center text-blue-500 hover:underline mt-3"
          href="/signup"
        >
          Register for an account
        </Link>
      </div>
    </div>
  );
};

export default Page;
