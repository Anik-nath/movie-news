"use client";
import { useAppSelector } from "@/lib/hook";
import Link from "next/link";

const Sidebar = () => {
  const ResultuserData = useAppSelector((state) => state.userSlice);
//   console.log(ResultuserData);
  return (
    <>
      <aside className="w-64 bg-red-600 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold">
          <Link href="/">NEXTNEWS</Link>
        </div>
        <nav className="flex-1">
          <ul className="space-y-4 p-4">
            <li>
              <Link href="/dashboard" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            {ResultuserData?.userDetails?.role === "user" ? (
              <li>
                <Link href="/dashboard/users" className="hover:text-gray-400">
                  Users
                </Link>
              </li>
            ) : (
              ""
            )}

            <li>
              <Link href="/dashboard/settings" className="hover:text-gray-400">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/dashboard/analytics" className="hover:text-gray-400">
                Analytics
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
