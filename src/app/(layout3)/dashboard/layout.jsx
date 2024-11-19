"use client";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar></Sidebar>
      {/* Main Content Area */}
      <div className="flex-1">
        {/* Top Bar */}
        <header className="bg-white shadow p-4">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </header>
        {/* Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default layout;
