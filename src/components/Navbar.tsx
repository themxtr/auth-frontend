"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <nav className="navbar w-full shadow-md px-8 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-indigo-600">
        AuthSystem
      </Link>

      <div className="flex gap-4 items-center">
        <DarkModeToggle />

        {!isLoggedIn ? (
          <>
            <Link href="/login">Login</Link>
            <Link
              href="/signup"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
