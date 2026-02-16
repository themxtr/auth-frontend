"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">
        Secure Authentication System
      </h1>

      <p className="mb-8">
        JWT + Firebase + Next.js (Industry-Level Setup)
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => router.push("/login")}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Login
        </button>

        <button
          onClick={() => router.push("/signup")}
          className="border border-indigo-600 px-6 py-3 rounded-lg"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
