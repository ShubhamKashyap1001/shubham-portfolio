"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-28 relative bg-[#05070E] dark:bg-[#02040A]">
      {/* Crystal background layers */}
      <div className="absolute inset-0  pointer-events-none" />
      <div className="absolute inset-0  pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-4xl mx-auto px-6"
      >
        {/* Heading */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-3xl font-bold text-center mb-10 text-black dark:text-white"
        >
          About Me
        </motion.h2>

        {/* Glass Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring", stiffness: 100 }}
          className="
            backdrop-blur-xl bg-white/5 dark:bg-white/5
            border border-white/10
            rounded-2xl p-8
            text-center
            hover:border-blue-500/40
            shadow-xl
            transition-all
          "
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            I am a{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Computer Science undergraduate
            </span>{" "}
            with a strong interest in building{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              scalable full-stack and AI-powered applications
            </span>
            . I enjoy working across the entire development lifecycle — from
            designing clean user interfaces to implementing robust backend
            systems.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-6">
            Over time, I have worked on projects involving{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Next.js, React, Node.js, databases, and cloud technologies
            </span>
            , where I focused on writing maintainable code and solving
            real-world problems. I actively explore modern tools and best
            practices to improve performance, scalability, and user experience.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-6">
            I am particularly motivated by opportunities that allow me to{" "}
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              learn from experienced engineers
            </span>
            , contribute to impactful products, and grow as a developer. I value
            curiosity, consistency, and continuous improvement in my work.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
