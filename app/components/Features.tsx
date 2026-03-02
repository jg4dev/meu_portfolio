"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-20"
    >
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          variants={item}
          className="p-8 bg-white rounded-2xl shadow-xl"
        >
          Projeto {i}
        </motion.div>
      ))}
    </motion.div>
  );
}