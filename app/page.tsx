import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center py-16 border-b border-[--border]">
        <h1 className="text-5xl font-bold mb-6 text-[--foreground]">
          Consapevolmente Belli
        </h1>
        <p className="text-xl text-[--text-muted] max-w-2xl mx-auto mb-8">
          Il blog di Cristina Cafagno dedicato alla bellezza consapevole,
          naturale e olistica. Una rivoluzione contro il mondo finto dell'estetica.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://studio83.es"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[--primary] text-white rounded-full hover:bg-[--primary-dark] transition-colors font-medium"
          >
            Visita Studio83
          </a>
          <a
            href="https://www.instagram.com/studio83_beautysolution/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-[--primary] text-[--primary] rounded-full hover:bg-[--primary] hover:text-white transition-colors font-medium"
          >
            Seguimi su Instagram
          </a>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-[--foreground]">Ultimi Articoli</h2>
        {posts.length === 0 ? (
          <p className="text-[--text-muted] text-center py-12">
            Nessun articolo disponibile al momento. Torna presto!
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group border border-[--border] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.image && (
                  <div className="aspect-video bg-[--accent] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[--primary] to-[--secondary] opacity-50" />
                  </div>
                )}
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

      {/* About Section */}
      <section className="py-12 border-t border-[--border]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[--foreground]">Chi Sono</h2>
          <p className="text-lg text-[--text-muted] mb-6">
            Sono <strong className="text-[--foreground]">Cristina Cafagno</strong>,
            estetista, formatrice e mamma. Gestisco Studio83 a Tenerife, dove ogni trattamento
            è un viaggio verso la consapevolezza di sé e la bellezza autentica.
          </p>
          <p className="text-lg text-[--text-muted]">
            Questo blog è la mia dichiarazione di guerra al mondo finto della bellezza.
            Qui troverai verità, consapevolezza e strumenti per ritrovare te stesso.
          </p>
        </div>
      </section>
    </div>
  );
}
