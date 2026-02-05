"use client";

import { motion } from "framer-motion";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 flex items-center justify-center">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          <h1 className="text-5xl font-extrabold text-zinc-100">
            João Gabriel
          </h1>

          <p className="mt-4 text-xl text-zinc-300 max-w-xl mx-auto">
            Desenvolvedor em formação, focado em criar experiências web modernas,
            acessíveis e elegantes.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projetos"
              className="px-6 py-3 rounded-xl bg-zinc-100 text-zinc-900 font-semibold hover:bg-zinc-200 transition"
            >
              Ver projetos
            </a>

            <a
              href="#contato"
              className="px-6 py-3 rounded-xl border border-zinc-300 text-zinc-300 font-semibold hover:bg-zinc-700 transition"
            >
              Contato
            </a>
          </div>
        </motion.section>
      </main>

      <About />
      <Skills />
      <Projects />
    </>
  );
}
