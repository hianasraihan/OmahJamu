"use client";

import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const pathname = usePathname();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Kontak", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const el = document.querySelector(item.href);
        return el
          ? { id: item.href, top: el.getBoundingClientRect().top }
          : null;
      });

      const current = sections
        .filter((sec): sec is { id: string; top: number } => sec !== null)
        .find((sec) => sec.top >= 0 && sec.top < window.innerHeight / 2);

      if (current) setActive(current.id);
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="flex justify-between items-center px-4 md:px-10 lg:px-20 py-4">
        {/* Kiri - Logo */}
        <span className="text-xl font-bold text-[#e76f51]">OmahJamu</span>

        {/* Tengah - Navigasi (Desktop) */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-[16px] text-[#2d2f36] font-medium">
          {navItems.map((item) => {
            const isActive = active === item.href;
            const isHome = pathname === "/";
            return (
              <li key={item.href}>
                {isHome ? (
                  <a
                    href={item.href}
                    className={`pb-1 border-b-2 transition-all duration-200 ease-in-out ${
                      isActive
                        ? "border-[#e76f51] text-[#e76f51]"
                        : "border-transparent hover:border-[#e76f51] hover:text-[#e76f51]"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={{ pathname: "/", query: { scrollTo: item.href.slice(1) } }}
                    className="hover:text-[#e76f51] transition"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Kanan - Icon & Auth */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 hover:text-[#e76f51] cursor-pointer" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Profile */}
          <Link href="/profile">
            <User className="w-5 h-5 hover:text-[#e76f51] cursor-pointer" />
          </Link>

          {/* Login | Daftar (hanya desktop) */}
          <div className="hidden md:flex items-center gap-2 text-sm text-[#2d2f36]">
            <Link href="/login" className="hover:text-[#e76f51] transition font-medium">
              Log in
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/daftar" className="hover:text-[#e76f51] transition font-medium">
              Daftar
            </Link>
          </div>

          {/* Burger Button (mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl text-[#e76f51] focus:outline-none"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center bg-white px-6 pb-6 space-y-4 text-base text-[#2d2f36] font-medium shadow">
          {navItems.map((item) => {
            const isHome = pathname === "/";
            return (
              <li key={item.href}>
                {isHome ? (
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="hover:text-[#e76f51] transition"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={{ pathname: "/", query: { scrollTo: item.href.slice(1) } }}
                    onClick={closeMenu}
                    className="hover:text-[#e76f51] transition"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}

          {/* Login & Daftar di Mobile */}
          <li className="pt-2 border-t w-full text-center border-gray-200">
            <Link href="/login" onClick={closeMenu} className="block py-1 hover:text-[#e76f51]">
              Log in
            </Link>
            <Link href="/daftar" onClick={closeMenu} className="block py-1 hover:text-[#e76f51]">
              Daftar
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
