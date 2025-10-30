import { FadeIn } from "@/components/animations/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Yuvraj Prajapati",
  description: "Technical projects and development work by Yuvraj Prajapati",
};

const project = {
  id: 1,
  title: "Observer",
  description:
    "An AI-powered personalized career guidance platform designed to help students discover their strengths and find suitable subjects, learning resources, and career paths that truly fit them. It breaks location and financial barriers so students from villages to major cities can access quality guidance and compete on a global level.",
  tech: ["Next.js 14", "MongoDB", "Prisma ORM", "NextAuth.js", "Tailwind CSS"],
  github: "https://github.com/yuvrajprajapatii/observer-project",
  website: "https://observer-project.vercel.app/",
  caseStudy: "https://yuvrajprajapati.com/projects/observer/case-studies",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 heading-primary font-nunito-sans">
          Projects
        </h1>
        <p className="text-sm md:text-base text-primary-white-muted mb-12 max-w-2xl">
          Turning bold ideas into real, meaningful digital experiences.
Every project shows a bit of my creativity, logic, and genuine passion for building things that make an impact.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-6">
        <FadeIn>
          <ProjectCard project={project} />
        </FadeIn>
      </div>
    </main>
  );
}

function ProjectCard({ project }: { project: typeof project }) {
  return (
    <article className="group border border-primary-gray-light/50 hover:border-accent-primary/50 rounded-xl transition-all duration-300 p-6 hover:translate-y-[-4px] cursor-pointer bg-primary-gray">
      <h2 className="text-lg font-bold mb-2 group-hover:gradient-text transition-colors heading-primary font-nunito-sans">
        {project.title}
      </h2>
      <p className="text-sm text-primary-white-muted mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 text-xs border border-primary-gray-light/50 hover:border-accent-primary/50 rounded-full transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary-white-muted hover:text-accent-primary transition-colors"
        >
          GitHub →
        </a>
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary-white-muted hover:text-accent-primary transition-colors"
        >
          Website →
        </a>
        <a
          href={project.caseStudy}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary-white-muted hover:text-accent-primary transition-colors"
        >
          Case Study →
        </a>
      </div>
    </article>
  );
}