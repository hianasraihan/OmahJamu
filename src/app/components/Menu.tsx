"use client";

import { useState } from "react";
import { Star, Plus } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/context/CartContext"; // <<--- Tambahan penting

const menus = [
  {
    name: "Burger Premium",
    price: "Rp 35.000",
    image: "/Burger1.png",
    desc: "Burger dengan daging sapi premium 150gr, keju cheddar, dan sayuran segar.",
    rating: 4.8,
    reviews: 120,
    label: "Populer",
  },
  {
    name: "Pizza Family",
    price: "Rp 120.000",
    image: "/Pizza.png",
    desc: "Pizza ukuran besar dengan topping daging sapi, ayam, jamur, dan sayuran segar.",
    rating: 4.7,
    reviews: 95,
    label: "Spesial",
  },
  {
    name: "Ayam Crispy Pedas",
    price: "Rp 28.000",
    image: "/Ayam.png",
    desc: "Ayam crispy dengan bumbu pedas spesial, disajikan dengan kentang goreng.",
    rating: 4.5,
    reviews: 76,
  },
  {
    name: "Mie Goreng Jawa",
    price: "Rp 20.000",
    image: "/Mie.jpg",
    desc: "Mie goreng khas Jawa dengan ayam suwir, kol, dan telur.",
    rating: 4.6,
    reviews: 83,
  },
  {
    name: "Sate Ayam",
    price: "Rp 30.000",
    image: "/Sate.jpg",
    desc: "Sate ayam empuk dengan bumbu kacang dan lontong.",
    rating: 4.7,
    reviews: 110,
  },
  {
    name: "Nasi Goreng Spesial",
    price: "Rp 25.000",
    image: "/Nasgor.jpg",
    desc: "Nasi goreng dengan ayam, telur, udang, dan acar.",
    rating: 4.9,
    reviews: 132,
  },
];

export default function Menu() {
  const [showAll, setShowAll] = useState(false);
  const { addToCart } = useCart(); // <<--- Tambahan penting

  const visibleMenus = showAll ? menus : menus.slice(0, 3);

  return (
    <section id="menu" className="px-4 md:px-8 py-16 bg-[#f7f8fa] text-center">
      <h2 className="text-3xl font-bold text-[#1d1f2b] mb-2">Menu Unggulan</h2>
      <p className="text-gray-600 mb-10">
        Pilihan menu terbaik kami dengan bahan-bahan premium dan rasa yang autentik.
      </p>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        <AnimatePresence>
          {visibleMenus.map((item) => (
            <motion.div
              layout
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={300}
                  className="rounded-t-xl object-cover h-48 w-full"
                />
                {item.label && (
                  <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    {item.label}
                  </span>
                )}
              </div>
              <div className="p-5 text-left">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-[#1d1f2b]">{item.name}</h3>
                  <p className="text-orange-500 font-bold">{item.price}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span>
                      {item.rating} ({item.reviews})
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      addToCart({
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        quantity: 1,
                      })
                    }
                    className="text-white bg-orange-500 px-3 py-1 rounded-full flex items-center gap-1 text-sm hover:bg-orange-600 transition"
                  >
                    <Plus size={16} /> Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-10 border border-orange-500 text-orange-500 font-medium px-6 py-2 rounded hover:bg-orange-50 transition"
      >
        {showAll ? "Tutup Menu" : "Lihat Semua Menu"}
      </button>
    </section>
  );
}
