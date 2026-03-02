"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-zinc-900 overflow-hidden">
      
      {/* Fundo animado profundo */}
      <motion.div
        className="absolute inset-0 -z-30 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 bg-[length:300%_300%]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Partículas (VERSÃO ESTÁVEL) */}
      {[...Array(30)].map((_, i) => {
        const left = (i * 37) % 100; 
        const duration = 18 + (i % 10);
        const delay = (i % 6) * 0.8;

        return (
          <motion.span
            key={i}
            initial={{ y: "120vh", opacity: 0 }}
            animate={{
              y: "-20vh",
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
            }}
            className="absolute w-[2px] h-[2px] bg-zinc-500 rounded-full"
            style={{ left: `${left}%` }}
          />
        );
      })}

      {/* Conteúdo principal */}
      <motion.div
        initial={{ opacity: 0, y: 120, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold tracking-tight text-zinc-100"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          João Gabriel
        </motion.h1>

        <motion.p
          className="mt-8 text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          Sou desenvolvedor e construo soluções digitais com qualidade e propósito.
        </motion.p>

        <motion.div className="mt-14 flex justify-center gap-8 flex-wrap">
          <motion.a
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            href="#projetos"
            className="px-12 py-5 rounded-2xl bg-zinc-100 text-zinc-900 font-semibold transition"
          >
            Ver projetos
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, backgroundColor: "#27272a" }}
            whileTap={{ scale: 0.9 }}
            href="#contato"
            className="px-12 py-5 rounded-2xl border border-zinc-700 text-zinc-300 font-semibold transition"
          >
            Contato
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}