export default function ProfileUser() {
  return (
    <section className="min-h-screen bg-white px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-[#e76f51] mb-6">Profil Pengguna</h1>

      <div className="w-full max-w-xl bg-white border shadow-md p-6 rounded-md">
        <p className="text-gray-700 mb-2">
          <span className="font-semibold text-[#e76f51]">Nama:</span> Budi Pelanggan
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold text-[#e76f51]">Email:</span> budi@email.com
        </p>
        <p className="text-gray-700 mb-6">
          <span className="font-semibold text-[#e76f51]">Role:</span> Pengguna Biasa
        </p>

        {/* Fitur khusus user */}
        <div className="space-y-3">
          <button className="w-full bg-[#e76f51] text-white py-2 rounded hover:bg-[#d65a3f] transition">
            Lihat Riwayat Pesanan
          </button>
          <button className="w-full bg-[#e76f51] text-white py-2 rounded hover:bg-[#d65a3f] transition">
            Edit Profil
          </button>
          <button className="w-full bg-[#e76f51] text-white py-2 rounded hover:bg-[#d65a3f] transition">
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
