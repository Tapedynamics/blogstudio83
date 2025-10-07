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
          <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-3xl md:text-4xl font-bold logo-conscious-header hover:opacity-80 transition-opacity">
              Consapevolmente Belli
            </Link>
            <nav className="flex gap-6 items-center">
              <Link href="/" className="text-[--text-muted] hover:text-[--primary] transition-colors">
                Blog
              </Link>
              <a
                href="https://studio83.es"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[--primary] text-white rounded-full hover:bg-[--primary-dark] transition-colors"
              >
                Studio83
              </a>
            </nav>
          </div>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="border-t border-[--border] bg-[--accent] py-12 mt-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
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
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.instagram.com/studio83_beautysolution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[--primary] hover:text-[--primary-dark]"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/studio83beautysolution"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[--primary] hover:text-[--primary-dark]"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://studio83.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[--primary] hover:text-[--primary-dark]"
                  >
                    Sito Web
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[--border] text-center text-sm text-[--text-muted]">
              <p>&copy; {new Date().getFullYear()} Studio83. Tutti i diritti riservati.</p>
              <div className="mt-2 flex justify-center gap-4">
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
