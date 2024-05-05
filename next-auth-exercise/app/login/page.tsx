"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

const Page = () => {
  const [error, setError] = useState("");
  // const session = useSession();
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") router.replace("/dashboard");
  }, [sessionStatus, router]);

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

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
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
          <button
            className="w-full bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center my-4"
            onClick={() => {
              signIn("github");
            }}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.801 8.206 11.385.6.111.82-.258.82-.577 0-.284-.01-1.04-.015-2.04-3.338.724-4.042-1.611-4.042-1.611-.546-1.386-1.333-1.756-1.333-1.756-1.089-.743.083-.728.083-.728 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.808 1.304 3.495.998.109-.775.419-1.305.763-1.605-2.665-.307-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.235-3.224-.124-.303-.536-1.526.117-3.18 0 0 1.008-.322 3.3 1.232.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.554 3.296-1.232 3.296-1.232.654 1.654.242 2.877.118 3.18.77.844 1.234 1.914 1.234 3.224 0 4.61-2.807 5.62-5.478 5.923.43.371.818 1.102.818 2.218 0 1.602-.015 2.892-.015 3.286 0 .319.215.693.825.576C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12"
              />
            </svg>
            Sign In with GitHub
          </button>
          <div className="text-center text-gray-500 mt-3">- OR -</div>

          <Link
            className="block text-center text-blue-500 hover:underline mt-3"
            href="/signup"
          >
            Register for an account
          </Link>
        </div>
      </div>
    )
  );
};

export default Page;
