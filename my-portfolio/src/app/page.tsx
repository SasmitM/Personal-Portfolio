import { portfolioData } from "@/data/portfolio";
import HeroSection from "./components/HeroSection";
import SocialLinks from "./components/SocialLinks";
import ClassesSection from "./components/ClassesSection";
import ProjectsSection from "./components/ProjectsSection";
import ExtracurricularsSection from "./components/ExtracurricularsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="w-full">
        {/* Hero Section */}
        <HeroSection
          profile={portfolioData.profile}
          interests={portfolioData.interests}
          intro={portfolioData.intro}
        />

        {/* Social Links */}
        <div className="w-full px-4 sm:px-8 pb-8">
          <div className="max-w-6xl mx-auto">
            <SocialLinks socialLinks={portfolioData.socialLinks} />
          </div>
        </div>

        {/* Classes Section */}
        <ClassesSection classes={portfolioData.classes} />

        {/* Projects Section */}
        <ProjectsSection projects={portfolioData.projects} />

        {/* Extracurriculars Section */}
        <ExtracurricularsSection
          extracurriculars={portfolioData.extracurriculars}
        />
      </main>
    </div>
  );
}
