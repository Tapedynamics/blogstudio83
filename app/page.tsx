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
            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
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
                className="px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base border-2 border-[--primary] text-[--primary] rounded-full hover:bg-[--primary] hover:text-white transition-all font-medium"
              >
                Seguimi su Instagram
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
                className="group border border-[--border] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Immagine decorativa sempre presente */}
                <div className="aspect-video bg-gradient-to-br from-[--accent] via-[--accent-light] to-[--background] relative overflow-hidden">
                  {/* Pattern organico */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-8 w-24 h-24 rounded-full bg-[--sage] blur-2xl"></div>
                    <div className="absolute bottom-8 left-12 w-32 h-32 rounded-full bg-[--earth] blur-3xl"></div>
                    <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-[--primary] blur-xl"></div>
                  </div>
                  {/* Emoji decorativo */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
                    🌿
                  </div>
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
          {/* Profile Photo Placeholder */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[--primary] to-[--secondary] flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-xl">
              CC
            </div>
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
