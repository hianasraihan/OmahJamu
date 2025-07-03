'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        md:min-h-0
        lg:min-h-screen
        pt-24 px-6 md:px-20 py-16
        flex flex-col md:flex-row items-center justify-between
        bg-[#fdf5e6]
      "
    >
      {/* Kiri: Konten Teks */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1e2e] leading-tight">
          Makanan Lezat untuk <br className="hidden md:block" /> Setiap Saat
        </h1>
        <p className="text-[#5c5c5c] text-lg md:text-xl">
          Nikmati berbagai hidangan berkualitas tinggi dengan bahan-bahan segar pilihan chef profesional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="#menu"
            className="bg-[#f26522] hover:bg-[#d95415] text-white px-6 py-4 rounded-md text-lg font-semibold transition"
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>

      {/* Kanan: Gambar */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/Burger1.png"
          alt="Burger dan Pizza"
          width={600}
          height={400}
          className="rounded-xl object-cover w-full max-w-[500px] shadow-lg"
        />
      </div>
    </section>
  );
}
