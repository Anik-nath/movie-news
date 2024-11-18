import Link from "next/link";
import React from "react";

const dashboardNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-2">
        The page you’re looking for doesn’t exist within the dashboard.
      </p>
      <Link
        href="/dashboard"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Back to Dashboard Home
      </Link>
    </div>
  );
};

export default dashboardNotFound;
