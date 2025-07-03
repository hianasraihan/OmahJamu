"use client";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-[#f9fafb] text-gray-800"
    >
      <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
        Hubungi Kami
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Informasi Kontak */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Informasi Kontak</h3>

          <div className="flex items-start gap-4">
            <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
              <MdLocationOn size={24} />
            </div>
            <div>
              <p className="font-bold">Alamat</p>
              <p>Perumahan Permata Bekasi 2 Blok 0 No 29</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
              <MdPhone size={24} />
            </div>
            <div>
              <p className="font-bold">Telepon</p>
              <p>0819-3256-8372</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
              <MdEmail size={24} />
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p>aminrasyid171102@gmail.com</p>
            </div>
          </div>

          {/* Sosial Media */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://wa.me/6281932568372"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 text-3xl hover:text-green-700 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/amin_rsyd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 text-3xl hover:text-pink-700 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Formulir Kontak */}
        <div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full p-4 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full p-4 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Subjek"
              className="w-full p-4 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Pesan Anda"
              rows={5}
              className="w-full p-4 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
