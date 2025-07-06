"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Prilly Latuconsina",
    image: "/pp1.jpg",
    stars: 5,
    text: "Burger premiumnya benar-benar istimewa, dagingnya juicy dan bumbunya pas. Sudah beberapa kali pesan disini dan selalu puas!",
  },
  {
    name: "Rezky Aditya",
    image: "/pp2.jpg",
    stars: 4,
    text: "Pizza familynya besar dan toppingnya melimpah. Cocok banget untuk acara kumpul keluarga. Anak-anak suka semua.",
  },
  {
    name: "Fattah Syach",
    image: "/pp3.jpg",
    stars: 5,
    text: "Ayam crispy pedasnya beneran pedas tapi enak! Kentang gorengnya juga renyah dan gurih. Udah jadi langganan tiap weekend.",
  },
];

export default function Testimoni() {
  return (
    <section id="testimoni" className="bg-[#f9fafb] py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#1f2937]">
        Testimoni Pelanggan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <div className="flex text-yellow-400 text-xl">
                  {Array.from({ length: item.stars }, (_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {item.stars < 5 &&
                    Array.from({ length: 5 - item.stars }, (_, i) => (
                      <span key={i}>☆</span>
                    ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              &quot;{item.text}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
