"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function KeranjangPage() {
  const { cart, removeFromCart } = useCart();

  // Fungsi menghitung total harga
  const getTotal = () => {
    return cart.reduce((total, item) => {
      const angka = parseInt(item.price.replace(/[^\d]/g, ""));
      return total + angka * item.quantity;
    }, 0);
  };

  return (
    <section className="min-h-screen px-4 md:px-10 lg:px-20 py-16 bg-[#f7f8fa]">
      <h1 className="text-3xl font-bold text-[#1d1f2b] mb-8">Keranjang Belanja</h1>

      {/* Jika keranjang kosong */}
      {cart.length === 0 ? (
        <div className="text-center mt-20 text-gray-600">
          <p className="mb-4">Keranjang kamu masih kosong.</p>
          <Link
            href="/#menu"
            className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            Lihat Menu
          </Link>
        </div>
      ) : (
        <>
          {/* Daftar item dalam keranjang */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-[#1d1f2b]">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.price}</p>
                  <p className="text-sm text-gray-600">Jumlah: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>

          {/* Total Harga + Checkout */}
          <div className="text-right mt-10">
            <p className="text-xl font-semibold text-[#1d1f2b]">
              Total:{" "}
              {getTotal().toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <button
              onClick={() => alert("Checkout belum diimplementasikan")}
              className="mt-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Checkout Sekarang
            </button>
          </div>
        </>
      )}
    </section>
  );
}
