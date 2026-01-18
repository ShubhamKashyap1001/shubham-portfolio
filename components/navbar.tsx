"use client";
import ThemeToggle from "@/components/theme-toggle";


export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="font-bold text-lg">SHUBHAM KUMAR</h1>

        <div className="flex gap-6 items-center">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </nav>
  );
}
