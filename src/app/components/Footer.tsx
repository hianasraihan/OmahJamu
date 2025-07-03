const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-2">OmahJamu</h3>
          <p className="text-sm text-gray-400">
            Menyajikan makanan lezat dan berkualitas sejak 2020.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Navigasi</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#home" className="hover:underline text-gray-300">
                Home
              </a>
            </li>
             <li>
              <a href="#menu" className="hover:underline text-gray-300">
                Menu
              </a>
            </li>
              <li>
              <a href="#testimoni" className="hover:underline text-gray-300">
                Testimoni
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-gray-300">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-300">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Info Kontak */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Kontak</h4>
          <p className="text-sm text-gray-400">Email: aminrasyid171102@gmail.com</p>
          <p className="text-sm text-gray-400">Telp: 0819-3256-8372</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; 2025 Toko Makanan. Semua Hak Dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
