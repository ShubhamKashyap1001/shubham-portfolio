"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ];

  return (
    <section id="skills" className="py-28 bg-[#05070E] dark:bg-[#02040A] relative">
      <div className="absolute inset-0 pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-14 text-white"
      >
        Skills
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto px-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
              flex flex-col items-center gap-3
              bg-[#101426]/80 backdrop-blur-xl
              border border-white/10
              rounded-xl p-5
              hover:border-blue-500/30
              transition-all
            "
          >
            <motion.div
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={40}
                height={40}
                className="object-contain"
              />
            </motion.div>

            <span className="text-sm font-medium text-gray-200">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
