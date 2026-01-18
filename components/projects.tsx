"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Resume AI Checker",
      desc: "AI-powered ATS & resume analysis platform",
      tech: ["Next.js", "OpenAI", "Tailwind"],
      link: "https://resume-ai-checker-five.vercel.app/",
    },
    {
      name: "Study Mate",
      desc: "Smart study and productivity platform",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      name: "PR Bot",
      desc: "Automated GitHub PR review bot",
      tech: ["Node.js", "GitHub API", "Docker"],
      link: "https://pr-bot-review.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-[#05070E] dark:bg-[#02040A]">
      <div className="absolute inset-0 " />

      <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-white">
        Projects
      </h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3"
      >
        {projects.map((p) => (
          <motion.div
            key={p.name}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="
              relative rounded-2xl p-6
              backdrop-blur-xl bg-white/5 dark:bg-white/5
              border border-white/10
              hover:border-blue-500/40
              shadow-xl
              transition-all
            "
          >
            <div className="absolute left-0 top-0 h-[2px] w-full rounded-t-2xl bg-gradient-to-r from-blue-500 to-cyan-400" />

            <h3 className="text-xl font-semibold text-black dark:text-white">
              {p.name}
            </h3>

            <p className="mt-3 text-gray-700 dark:text-gray-400">
              {p.desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="
                    rounded-full border border-blue-500/20
                    bg-blue-500/10 px-3 py-1 text-xs text-blue-400
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {p.link !== "#" ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-6 inline-flex items-center gap-2
                  text-blue-400 hover:text-cyan-400
                  transition
                "
              >
                Live Demo →
              </a>
            ) : (
              <span className="mt-6 inline-block text-sm text-gray-500">
                Coming Soon
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
