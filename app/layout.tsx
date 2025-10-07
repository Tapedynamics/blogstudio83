import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consapevolmente Belli | Blog Studio83",
  description: "Il blog di Cristina Cafagno - Estetica consapevole, bellezza naturale e rivoluzione olistica. Studio83 Tenerife.",
  keywords: ["estetica", "bellezza consapevole", "Studio83", "Cristina Cafagno", "Tenerife", "trattamenti olistici"],
  authors: [{ name: "Cristina Cafagno" }],
  openGraph: {
    title: "Consapevolmente Belli | Blog Studio83",
    description: "Il blog di Cristina Cafagno - Estetica consapevole, bellezza naturale e rivoluzione olistica.",
    url: "https://studio83.es",
    siteName: "Consapevolmente Belli",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b border-[--border] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
            <Link href="/" className="text-xl sm:text-2xl md:text-4xl font-bold logo-conscious-header hover:opacity-80 transition-opacity">
              Consapevolmente Belli
            </Link>
            <nav className="flex gap-3 sm:gap-6 items-center">
              <Link href="/" className="hidden sm:inline text-[--text-muted] hover:text-[--primary] transition-colors">
                Blog
              </Link>
              <a
                href="https://studio83.es"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-[--primary] text-white rounded-full hover:bg-[--primary-dark] transition-colors"
              >
                Studio83
              </a>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="border-t border-[--border] bg-[--accent] py-8 sm:py-12 mt-12 sm:mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <h3 className="font-bold mb-4 text-[--foreground]">Consapevolmente Belli</h3>
                <p className="text-sm text-[--text-muted]">
                  Il blog di Cristina Cafagno dedicato alla bellezza consapevole e all&apos;estetica olistica.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-[--foreground]">Studio83</h3>
                <p className="text-sm text-[--text-muted] mb-2">
                  Playa de Las Américas, Tenerife
                </p>
                <a
                  href="https://wa.me/34634011846"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[--primary] hover:text-[--primary-dark]"
                >
                  WhatsApp: +34 634 011 846
                </a>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-[--foreground]">Seguimi</h3>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://www.instagram.com/studio83_beautysolution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-full hover:shadow-lg transition-all text-white"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/studio83beautysolution"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-[#1877F2] rounded-full hover:shadow-lg transition-all text-white"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://studio83.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[--primary] to-[--secondary] rounded-full hover:shadow-lg transition-all text-white"
                    aria-label="Sito Web Studio83"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[--border] text-center text-xs sm:text-sm text-[--text-muted]">
              <p>&copy; {new Date().getFullYear()} Studio83. Tutti i diritti riservati.</p>
              <div className="mt-2 flex justify-center gap-3 sm:gap-4 flex-wrap">
                <a href="https://studio83.es/aviso-legal/" className="hover:text-[--primary]">Avviso Legale</a>
                <a href="https://studio83.es/politica-de-privacidad/" className="hover:text-[--primary]">Privacy</a>
                <a href="https://studio83.es/politica-de-cookies/" className="hover:text-[--primary]">Cookie</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
