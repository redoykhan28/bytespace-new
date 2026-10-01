import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Courses from "@/components/Courses";
import LearningPaths from "@/components/LearningPaths";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Courses />
      <LearningPaths />
      <Features />
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
