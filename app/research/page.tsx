import { FadeIn } from "@/components/animations/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Yuvraj Prajapati",
  description: "AI and Quantum Computing research by Yuvraj Prajapati",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 heading-primary font-nunito-sans">Research</h1>
        <p className="text-sm md:text-base text-primary-white-muted mb-12 max-w-2xl">
          A space where I dive deep into ideas that challenge how we think and build.
          Each paper reflects my curiosity to explore, question, and push the boundaries of knowledge.
        </p>
      </FadeIn>

      <div className="space-y-8">
        <FadeIn>
          <ResearchUpdate />
        </FadeIn>
      </div>
    </main>
  );
}

function ResearchUpdate() {
  return (
    <article className="border-l-2 border-primary-gray-light hover:border-accent-primary transition-colors pl-6 py-3">
      <div>
        <h2 className="text-lg font-bold mb-1.5">Current Research Focus</h2>
        <p className="text-xs text-primary-white-muted mb-3">
          Ongoing • 2025
        </p>
      </div>
      <p className="text-sm text-primary-white-muted mb-3 leading-relaxed">
        I've developed one research paper currently undergoing refinement. Alongside this, I'm actively working in domains like AI and Quantum Physics. I'm open to exploring new areas and collaborating on your projects. If you'd like to contribute, collaborate, or connect regarding my work, definitely reach out—I'm excited to discuss ideas!
      </p>
    </article>
  );
}