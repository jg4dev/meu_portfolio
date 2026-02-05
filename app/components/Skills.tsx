"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section className="w-full bg-zinc-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-100 mb-12">
          Tecnologias
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm font-medium hover:text-white hover:border-zinc-500 transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
