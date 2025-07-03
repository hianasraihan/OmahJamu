'use client';

import {
  UtensilsCrossed, // pengganti Burger
  Pizza,
  Drumstick,
  Martini // pengganti Cocktail
} from 'lucide-react';
import React from 'react';

const categories = [
  {
    icon: <UtensilsCrossed size={28} className="text-[#f26522]" />,
    title: 'Cepat Saji',
    subtitle: '50+ Varietas',
  },
  {
    icon: <Pizza size={28} className="text-[#f26522]" />,
    title: 'Pizza',
    subtitle: '30+ Varietas',
  },
  {
    icon: <Drumstick size={28} className="text-[#f26522]" />,
    title: 'Ayam',
    subtitle: '25+ Varietas',
  },
  {
    icon: <Martini size={28} className="text-[#f26522]" />,
    title: 'Minuman',
    subtitle: '40+ Varietas',
  },
];

export default function Category() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a1e2e] mb-12">
        Kategori Makanan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-[#f9f9f9] rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#fff0dc]">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#1a1e2e] mb-1">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
