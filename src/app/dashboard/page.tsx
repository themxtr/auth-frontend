"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "../../services/api";

interface User {
  name: string;
  email: string;
  createdAt?: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/me");
        setUser(res.data);
      } catch {
        localStorage.removeItem("token");
        router.push("/login");
      }
    };

    fetchUser();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="card shadow-xl rounded-2xl p-8 w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Dashboard
        </h1>

        {user && (
          <div className="space-y-4">
            <div>
              <p className="text-sm opacity-70">Name</p>
              <p className="font-medium">{user.name}</p>
            </div>

            <div>
              <p className="text-sm opacity-70">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>

            {user.createdAt && (
              <div>
                <p className="text-sm opacity-70">Account Created</p>
                <p className="font-medium">
                  {new Date(user.createdAt).toLocaleString()}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
