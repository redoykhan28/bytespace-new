import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Courses from "@/components/Courses";
import LearningPaths from "@/components/LearningPaths";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Courses />
      <LearningPaths />
      <CTA />
    </main>
  );
}
