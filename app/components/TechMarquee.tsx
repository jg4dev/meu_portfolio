"use client";

import { motion } from "framer-motion";

const techs = [
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

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-10 bg-zinc-950">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* duplicamos para loop infinito */}
        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="px-6 py-3 rounded-full bg-zinc-800 text-zinc-200 border border-zinc-700 text-sm font-medium whitespace-nowrap"
          >
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
}