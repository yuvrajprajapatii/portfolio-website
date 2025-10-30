import { FadeIn } from "@/components/animations/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Yuvraj Prajapati",
  description: "Technical articles and philosophical insights",
};

const blogPost = {
  id: 1,
  slug: "life-meaning-and-the-myths-we-live",
  title: "Life, Meaning, and the Myths We Live By",
  date: "2025-10-30",
  excerpt:
    "In a world that glorifies achievement—chasing high-paying jobs, prestigious degrees, or building empires—we often forget to ask the most fundamental question: why are we doing all this? This post explores the profound quest for meaning beyond societal success, drawing from philosophy, science, and the myths that shape our reality.",
  readTime: "8 min read",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
      <FadeIn>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 heading-primary font-nunito-sans">Blog</h1>
        <p className="text-sm md:text-base text-primary-white-muted mb-12 max-w-2xl">
          A corner where I share my thoughts, lessons, and experiences from what I build and learn.
These blogs capture my journey—ideas, insights, and reflections along the way.
        </p>
      </FadeIn>

      <div className="space-y-8">
        <FadeIn>
          <BlogPostCard post={blogPost} />
        </FadeIn>
      </div>
    </main>
  );
}

function BlogPostCard({ post }: { post: typeof blogPost }) {
  return (
    <article className="group border-b border-primary-gray-light pb-6 hover:border-accent-hover transition-colors">
      <a
        href={`https://yuvrajprajapati.substack.com/p/${post.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <h2 className="text-xl font-bold mb-1.5 text-primary-white group-hover:text-primary-white transition-colors">
              {post.title}
            </h2>
            <div className="flex items-center gap-3 text-xs text-primary-white-muted">
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-primary-white-muted leading-relaxed mb-3">
          {post.excerpt}
        </p>
        <span className="text-xs text-primary-white-muted group-hover:text-primary-white transition-colors">
          Read more →
        </span>
      </a>
    </article>
  );
}