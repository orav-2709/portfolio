import HeroSection from "./HeroSection";
import ProjectsGrid from "./ProjectsGrid";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import ResumeSection from "./ResumeSection";
import ContactSection from "./ContactSection";
import ThemeToggle from "./ThemeToggle";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <ProjectsGrid />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}

export default Home;
