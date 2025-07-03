import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Toko Makanan",
  description: "Website penjualan makanan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>
        <CartProvider> {/* ⬅️ Pindahkan Navbar ke dalam sini */}
          <Navbar />
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
