import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header, Footer, StickyCTA } from "@/components/layout";
import { CityProvider } from "@/components/CityProvider";
import { generateBaseSEO } from "@/lib/seo";
import { CookieConsent } from "@/components/CookieConsent";
import { TurnstileGate } from "@/components/TurnstileGate";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  ...generateBaseSEO(),
  metadataBase: new URL('https://turkiyeteknikservis.com'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        <TurnstileGate>
          <CityProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <StickyCTA />
            <CookieConsent />
          </CityProvider>
        </TurnstileGate>
      </body>
    </html>
  );
}
