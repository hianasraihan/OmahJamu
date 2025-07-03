"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Category from "./components/Category";
import Testimoni from "./components/Testimoni";

export default function Page() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const sectionId = searchParams.get("scrollTo");
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300); // delay agar scroll terjadi setelah semua komponen dimuat
      }
    }
  }, [searchParams]);

  return (
    <>
      <section id="home">
        <Home />
      </section>
      <Category />
      <section id="menu">
        <Menu />
      </section>
      <section id="testimoni">
        <Testimoni />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
