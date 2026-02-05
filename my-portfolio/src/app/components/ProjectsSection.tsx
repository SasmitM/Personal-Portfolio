import { Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="w-full py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
