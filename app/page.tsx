"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Reveal from "./components/Reveal";
import { motion } from "framer-motion";
import TechMarquee from "./components/TechMarquee";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      
      <section id="sobre" className="scroll-mt-24">
        <Reveal>
          <About />
        </Reveal>
      </section>

      <section id="skills" className="scroll-mt-24">
        <Reveal>
          <Skills />
        </Reveal>
      </section>

      <section id="projetos" className="scroll-mt-24">
        
        <Reveal>
          <Projects />
        </Reveal>
      </section>

      <section
        id="contato"
        className="scroll-mt-24 py-24 bg-zinc-900 text-zinc-100 text-center"
      >
        <Reveal>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Contato
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-300 mb-6"
          >
            Vamos conversar?
          </motion.p>

          <motion.a
            href="mailto:jg447081@email.com"
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 25px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-xl bg-zinc-500 text-white font-semibold transition"
          >
            Entrar em contato
          </motion.a>
        </Reveal>
      </section>
    </>
  );
}