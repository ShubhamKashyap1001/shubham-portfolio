"use client";

import { motion } from "framer-motion";

export default function NetflixDivider() {
  return (
    <div className="relative w-full h-[36px] -mt-[18px] z-30 pointer-events-none overflow-hidden">
      <motion.svg
        viewBox="-120 0 1680 36"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <defs>
          {/* Netflix-accurate edge visibility */}
          <linearGradient id="nfCurve" x1="0%" y1="0%" x2="100%" y2="0%">
            {/* left edge – faint but visible */}
            <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />

            {/* build intensity */}
            <stop offset="25%" stopColor="rgba(59,130,246,0.9)" />

            {/* center highlight */}
            <stop offset="50%" stopColor="rgba(34,211,238,1)" />

            {/* fade symmetrically */}
            <stop offset="75%" stopColor="rgba(59,130,246,0.9)" />

            {/* right edge – faint but visible */}
            <stop offset="100%" stopColor="rgba(59,130,246,0.15)" />
          </linearGradient>
        </defs>

        {/* extended curve (edges off-screen) */}
        <path
          d="
            M -120 18
            C 220 10, 520 10, 820 10
            C 1120 10, 1420 10, 1720 18
          "
          fill="none"
          stroke="url(#nfCurve)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}
