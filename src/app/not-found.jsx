"use client";
import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-7xl text-red-500">404!</h1>
      <p className="text-4xl py-6">Sorry! Page not found.</p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
