"use client"

import React, { useState } from "react";
import Link from "next/link";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {
    setIsLogin((prev) => !prev)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isLogin ? "Login to your account" : "Create a new account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md "
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md "
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
            required
          />

          {isLogin ? (
            <Link href="/home">
              <button
                type="submit"
                className="w-full px-4 py-2 font-semibold text-white cursor-pointer bg-gray-900 rounded-md hover:bg-gray-700"
              >
                Login
              </button>
            </Link>
          ) : (
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white cursor-pointer bg-gray-900 rounded-md hover:bg-gray-700"
            >
              Sign Up
            </button>
          )}
        </form>

        <div className="text-sm text-center text-gray-600">
          {isLogin ? (
            <>
              Don't have an account?
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-600 cursor-pointer font-semibold hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?
              <button
                onClick={() => setIsLogin(true)}
                className=" text-blue-600 cursor-pointer font-semibold hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
