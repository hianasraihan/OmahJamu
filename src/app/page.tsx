import { Suspense } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Category from "./components/Category";
import Testimoni from "./components/Testimoni";
import ScrollHandler from "./components/ScrollHandler";

export default function Page() {
  return (
    <>
      {/* Tangani scroll berdasarkan parameter di URL */}
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>

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
