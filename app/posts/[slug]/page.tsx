import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post non trovato",
    };
  }

  return {
    title: `${post.title} | Consapevolmente Belli`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-12 pb-8 border-b border-[--border]">
        <div className="flex gap-2 mb-4">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-[--accent] text-[--secondary] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[--foreground] leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-[--text-muted]">
          <span className="font-medium text-[--foreground]">{post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('it-IT', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold mb-6 mt-12 text-[--foreground]">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-bold mb-4 mt-10 text-[--foreground]">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-bold mb-3 mt-8 text-[--foreground]">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mb-6 text-[--foreground] leading-relaxed text-lg">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-none mb-6 space-y-2 text-[--foreground]">
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li className="pl-0 text-lg">{children}</li>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-[--foreground]">{children}</strong>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-[--primary] hover:text-[--primary-dark] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            hr: () => <hr className="my-12 border-t border-[--border]" />,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-[--primary] pl-6 italic my-8 text-[--text-muted]">
                {children}
              </blockquote>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* CTA Section */}
      <div className="mt-16 pt-12 border-t border-[--border]">
        <div className="bg-[--accent] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[--foreground]">
            Vuoi scoprire di più?
          </h3>
          <p className="text-[--text-muted] mb-6">
            Seguimi sui social per contenuti esclusivi e prenota il tuo trattamento da Studio83
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.instagram.com/studio83_beautysolution/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[--primary] text-white rounded-full hover:bg-[--primary-dark] transition-colors font-medium"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/studio83beautysolution"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[--primary] text-white rounded-full hover:bg-[--primary-dark] transition-colors font-medium"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/34634011846"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[--primary] text-[--primary] rounded-full hover:bg-[--primary] hover:text-white transition-colors font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
