"use client";

import { motion } from "framer-motion";

export default function Particles() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ left: `${Math.random() * 100}%` }}
        />
      ))}
    </>
  );
}