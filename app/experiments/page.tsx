import { FadeIn } from "@/components/animations/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiments | Yuvraj Prajapati",
  description: "Experimental projects and prototypes",
};

const experiment = {
  id: 1,
  title: "Quantum-Inspired Machine Learning Experiments",
  description:
    "Quantum-inspired machine learning research using tensor network techniques. Implements Tensor Network Classifier (TNC), Quantum-Inspired Dimensionality Reduction (QIDR), and Amplitude Amplification Search (AAS) for efficient classification and data processing. Benchmarked against classical models on MNIST, Wine, and synthetic datasets with Python.",
  tech: ["Python", "NumPy", "Scikit-learn", "Tensorly", "SciPy", "Matplotlib", "Pandas", "Jupyter", "Pytest"],
  github: "https://github.com/yuvrajprajapatii/quantum-inspired-ml-experiments-v2",
  website: "https://github.com/yuvrajprajapatii/quantum-inspired-ml-experiments-v2/tree/main/notebooks",
  caseStudy: "https://yuvrajprajapati.com/experiments/quantum-inspired-ml/case-studies",
};

export default function ExperimentsPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 heading-primary font-nunito-sans">
          Experiments
        </h1>
        <p className="text-sm md:text-base text-primary-white-muted mb-12 max-w-2xl">
          Experiments — a place where I try out new ideas, explore different concepts, and keep pushing my skills a bit further.
Each one helps me learn, grow, and find better ways to build—and there’s always something new on the way.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FadeIn>
          <ProjectCard project={experiment} />
        </FadeIn>
      </div>
    </main>
  );
}

function ProjectCard({ project }: { project: typeof experiment }) {
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
      </div>
    </article>
  );
}