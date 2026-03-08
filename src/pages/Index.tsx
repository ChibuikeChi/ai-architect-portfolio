import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import InsightsSection from "@/components/portfolio/InsightsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* Subtle separator */}
      <div className="divider-glow mx-6 md:mx-12" />

      <AboutSection />
      <div className="divider-glow mx-6 md:mx-12" />

      <SkillsSection />
      <div className="divider-glow mx-6 md:mx-12" />

      <ProjectsSection />
      <div className="divider-glow mx-6 md:mx-12" />

      <ExperienceSection />
      <div className="divider-glow mx-6 md:mx-12" />

      <InsightsSection />
      <div className="divider-glow mx-6 md:mx-12" />

      <ContactSection />
      <Footer />
    </main>
  );
}
