import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <Skills />
      
      <Projects />
      
      <About />
      <SectionDivider />
      <Contact />
    </>
  );
}
