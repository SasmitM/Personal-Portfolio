import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
        {project.title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        {project.description}
      </p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
