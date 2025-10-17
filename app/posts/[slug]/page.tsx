import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

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
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-[--border]">
        <div className="flex gap-2 mb-3 sm:mb-4 flex-wrap">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 sm:px-3 py-1 bg-[--accent] text-[--secondary] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[--foreground] leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base text-[--text-muted] flex-wrap">
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
      <div className="prose prose-base sm:prose-lg max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 mt-8 sm:mt-12 text-[--foreground]">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-10 text-[--foreground]">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 mt-4 sm:mt-8 text-[--foreground]">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mb-4 sm:mb-6 text-[--foreground] leading-relaxed text-base sm:text-lg">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-none mb-4 sm:mb-6 space-y-2 text-[--foreground]">
                {children}
              </ul>
            ),
            li: ({ children }) => (
              <li className="pl-0 text-base sm:text-lg">{children}</li>
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

      {/* Newsletter Section */}
      <div className="mt-12 sm:mt-16">
        <NewsletterForm />
      </div>

      {/* Social CTA Section */}
      <div className="mt-8 pt-8 border-t border-[--border]">
        <div className="bg-[--accent] rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[--foreground]">
            Seguimi sui Social
          </h3>
          <p className="text-sm sm:text-base text-[--text-muted] mb-5 sm:mb-6">
            Contenuti quotidiani, pratiche e verità sulla bellezza consapevole
          </p>
          <div className="flex gap-4 sm:gap-5 justify-center flex-wrap">
            <a
              href="https://www.instagram.com/studio83_beautysolution/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-full hover:shadow-lg transition-all text-white"
              aria-label="Instagram"
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/studio83beautysolution"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#1877F2] rounded-full hover:shadow-lg transition-all text-white"
              aria-label="Facebook"
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/34634011846"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#25D366] rounded-full hover:shadow-lg transition-all text-white"
              aria-label="WhatsApp"
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
