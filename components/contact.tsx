"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-6"
      >
        {/* Email Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="
            bg-card/80 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-6
            text-center
            hover:border-blue-500/40
            hover:shadow-lg hover:shadow-blue-500/20
            transition-all
          "
        >
          <Mail className="mx-auto text-blue-400 mb-4" size={28} />
          <p className="text-sm text-gray-400 mb-1">Email</p>
          <p className="text-sm break-all">
            shubham.kumar.iotcs27@heritageit.edu.in
          </p>
        </motion.div>

        {/* GitHub Card */}
        <motion.a
          href="https://github.com/ShubhamKashyap1001"
          target="_blank"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="
            bg-card/80 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-6
            text-center
            hover:border-blue-500/40
            hover:shadow-lg hover:shadow-blue-500/20
            transition-all
          "
        >
          <Github className="mx-auto text-blue-400 mb-4" size={28} />
          <p className="text-sm text-gray-400 mb-1">GitHub</p>
          <p className="text-sm">github.com/ShubhamKashyap1001</p>
        </motion.a>

        {/* LinkedIn Card */}
        <motion.a
          href="https://linkedin.com/in/shubham-kumar-5679b4332"
          target="_blank"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="
            bg-card/80 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-6
            text-center
            hover:border-blue-500/40
            hover:shadow-lg hover:shadow-blue-500/20
            transition-all
          "
        >
          <Linkedin className="mx-auto text-blue-400 mb-4" size={28} />
          <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
          <p className="text-sm">linkedin.com/in/shubham-kumar</p>
        </motion.a>
      </motion.div>
    </section>
  );
}
