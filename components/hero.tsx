"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#05070E] dark:bg-[#02040A]" />

      {/* SAME GRADIENT AS CONTACT — BUT ONLY TOP TO MIDDLE */}
      <div
        className="
        absolute inset-0 
        bg-gradient-to-b from-blue-500/10 via-transparent to-transparent
        dark:from-blue-500/12
        pointer-events-none
      "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
        {/* GLASS CARD */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="
            backdrop-blur-md 
            bg-white/60 dark:bg-white/5
            border border-gray-200 dark:border-white/10
            p-10 rounded-2xl shadow-xl
          "
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              intelligent
            </span>
            <br />
            digital experiences
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-6 text-lg max-w-xl"
          >
            Hi, I’m{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Shubham Kumar
            </span>
            , a Full Stack Developer focused on crafting scalable web
            applications, AI-powered systems, and clean user experiences.
          </motion.p>

          <motion.div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="
                px-7 py-3 rounded-xl font-medium
                bg-gradient-to-r from-blue-500 to-cyan-400
                text-white
                hover:scale-105 transition
              "
            >
              View Projects
            </a>

            <a
              href="/ShubhamKumar_resume.pdf"
              className="
                px-7 py-3 rounded-xl
                bg-black text-white
                border border-black
                hover:bg-gray-900
                dark:bg-transparent dark:text-white
                dark:border-white/20
                transition
              "
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center items-center"
        >
          <div className="absolute w-[320px] h-[320px] 
            bg-blue-500/8 dark:bg-blue-500/15 rounded-full blur-3xl" />

          <div
            className="relative w-[280px] h-[280px] rounded-full 
            bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-600 p-[3px]"
          >
            <div
              className="w-full h-full rounded-full 
              bg-white/90 dark:bg-black/90 backdrop-blur-xl overflow-hidden"
            >
              <Image
                src="/shubham_profile.jpeg"
                alt="Shubham Kumar"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
