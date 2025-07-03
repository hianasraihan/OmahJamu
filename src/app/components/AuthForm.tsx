"use client";

import { useState } from "react";

export default function AuthForm({
  type,
}: {
  type: "login" | "daftar";
}) {
  const isLogin = type === "login";
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submit (you can connect to API here)
    alert(`${isLogin ? "Login" : "Daftar"} Berhasil!`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-lg shadow-md border border-gray-200 bg-white"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-[#e76f51]">
          {isLogin ? "Masuk ke Akun Anda" : "Buat Akun Baru"}
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#e76f51]"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#e76f51]"
          />
        </div>

        {!isLogin && (
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Konfirmasi Password
            </label>
            <input
              type="password"
              name="confirm"
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#e76f51]"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#e76f51] text-white py-2 rounded hover:bg-[#d85d3f] transition"
        >
          {isLogin ? "Masuk" : "Daftar"}
        </button>
      </form>
    </div>
  );
}
