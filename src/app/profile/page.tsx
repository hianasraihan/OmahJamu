"use client";

import { useState } from "react";
import ProfileAdmin from "../components/ProfileAdmin";
import ProfileUser from "../components/ProfileUser";

export default function ProfilPage() {
  const [userType, setUserType] = useState<"admin" | "user">("admin");

  return (
    <div className="min-h-screen p-6 bg-white text-orange-500">
      <div className="mb-4">
        <label className="mr-2 font-semibold">Tipe Akun:</label>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value as "admin" | "user")}
          className="border px-3 py-1 rounded-md bg-orange-100 text-orange-800"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      {userType === "admin" ? <ProfileAdmin /> : <ProfileUser />}
    </div>
  );
}
