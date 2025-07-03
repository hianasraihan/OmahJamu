"use client";

import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Teks Kiri */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Tentang Omah Jamu
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Omah Jamu berdiri sejak 2020 dengan misi menyajikan makanan tradisional khas Indonesia yang lezat, sehat, dan bernutrisi. 
            Kami percaya makanan tradisional tidak harus kalah saing dari makanan modern dalam rasa maupun penyajian.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Setiap hidangan kami dibuat dari bahan-bahan alami dan resep warisan yang telah disempurnakan oleh chef berpengalaman selama bertahun-tahun.
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-orange-500" size={20} />
              <span>Bahan segar setiap hari</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-orange-500" size={20} />
              <span>Harga terjangkau</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-orange-500" size={20} />
              <span>Chef profesional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-orange-500" size={20} />
              <span>Layanan cepat</span>
            </div>
          </div>

          {/* Tombol */}
          <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            Pelajari Lebih Lanjut
          </button>
        </div>

        {/* Gambar Kanan */}
        <div className="relative">
          <img
            src="/Chef.png" // Ganti dengan lokasi gambar kamu
            alt="Tentang Omah Jamu"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
