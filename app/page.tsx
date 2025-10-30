import Hero from "@/components/home/Hero";
import ContactSection from "@/components/home/ContactSection";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* About Section - Clean & Minimal, Left-Aligned with Left Margin */}
      <FadeIn delay={0.1}>
        <section className="py-24 px-6 md:px-12 lg:px-26 max-w-none -mt-50">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-primary max-w-4xl">
            About
          </h2>

          <div className="space-y-6 text-base md:text-lg text-primary-white-muted leading-relaxed max-w-5xl">
            <p>
              Hi, I’m Yuvraj Prajapati — an aspiring researcher, technologist, and entrepreneur exploring the intersections of Artificial Intelligence, Quantum Computing, and Consciousness-inspired systems. My work is driven by a deep curiosity to understand intelligence — both human and machine — and to reimagine what technology can become when guided by curiosity instead of convention.
            </p>

            <p>
              I’m endlessly fascinated by mathematics, astrophysics, philosophy, and psychology, and I love connecting these fields to rethink how humans and machines perceive reality. My journey hasn’t been easy — But every challenge comes to my way has shaped my perspective and strengthened my desire to create something truly meaningful.
            </p>

            <p>
              I love working on bold and unconventional ideas — from AI research and quantum experiments to deep philosophical discussions or startup projects. If it pushes boundaries or sparks new ways of thinking, I’m all in.
            </p>

            <p>
              When I’m not working on research or projects, you’ll find me listening to music, going to the gym, debating ideas, playing cricket, or just thinking about something random and fascinating.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Let's Connect Section */}
      <ContactSection />
    </main>
  );
}