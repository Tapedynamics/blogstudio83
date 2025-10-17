import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      {/* Hero Section - Image Full Width */}
      <section className="border-b border-[--border]">
        {/* Full Width Image */}
        <div className="w-full">
          <img
            src="/images/hero-bg.png"
            alt="Studio83 Tenerife"
            className="w-full h-auto object-cover max-h-[50vh] sm:max-h-[60vh]"
          />
        </div>

        {/* Content Below Image */}
        <div className="bg-gradient-to-br from-[--accent-light] via-[--background] to-[--accent] py-8 sm:py-12 md:py-16">
          <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
            <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl">🌿</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 logo-conscious pb-3 sm:pb-4">
              Consapevolmente Belli
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[--text-muted] mb-6 sm:mb-8 leading-relaxed">
              Il blog di Cristina Cafagno dedicato alla bellezza consapevole,
              naturale e olistica. Una rivoluzione contro il mondo finto dell&apos;estetica.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap items-center">
              <a
                href="https://studio83.es"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-[--primary] to-[--sage] text-white rounded-full hover:shadow-lg transition-all font-medium"
              >
                Visita Studio83
              </a>
              <a
                href="https://www.instagram.com/studio83_beautysolution/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-full hover:shadow-lg transition-all text-white"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/studio83beautysolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#1877F2] rounded-full hover:shadow-lg transition-all text-white"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* Posts Grid */}
      <section className="py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[--foreground]">Ultimi Articoli</h2>
        {posts.length === 0 ? (
          <p className="text-[--text-muted] text-center py-12">
            Nessun articolo disponibile al momento. Torna presto!
          </p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className={`group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow ${
                  post.pinned
                    ? 'border-[--primary] border-2 bg-gradient-to-br from-[--accent-light] to-white relative'
                    : 'border-[--border]'
                }`}
              >
                {post.pinned && (
                  <div className="absolute top-3 right-3 bg-[--primary] text-white px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
                    📌 INIZIA QUI
                  </div>
                )}
                {/* Immagine del post */}
                <div className="aspect-video relative overflow-hidden bg-[--accent]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image || "/images/post-default.png"}
                    alt={post.title}
                    className={`w-full h-full opacity-90 ${
                      post.slug === 'imparare-a-vedere'
                        ? 'object-contain bg-black'
                        : 'object-cover'
                    }`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {post.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-[--accent] text-[--secondary] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[--foreground] group-hover:text-[--primary] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[--text-muted] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[--text-muted]">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString('it-IT')}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* About Section with Profile */}
      <section className="py-12 sm:py-16 border-t border-[--border] bg-[--accent]">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
          {/* Profile Photo */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <img
              src="/images/cristina-profile.jpg"
              alt="Cristina Cafagno"
              className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto shadow-xl"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[--foreground]">Chi Sono</h2>
          <p className="text-base sm:text-lg md:text-xl text-[--text-muted] mb-4 sm:mb-6 leading-relaxed">
            Sono <strong className="text-[--foreground]">Cristina Cafagno</strong>,
            estetista, formatrice e mamma. Gestisco Studio83 a Tenerife, dove ogni trattamento
            è un viaggio verso la consapevolezza di sé e la bellezza autentica.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[--text-muted] leading-relaxed">
            Questo blog è la mia dichiarazione di guerra al mondo finto della bellezza.
            Qui troverai verità, consapevolezza e strumenti per ritrovare te stesso.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}
