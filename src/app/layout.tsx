import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header, Footer, StickyCTA } from "@/components/layout";
import { CityProvider } from "@/components/CityProvider";
import { generateBaseSEO } from "@/lib/seo";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  ...generateBaseSEO(),
  metadataBase: new URL('https://turkiyeteknikservis.com'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-white text-slate-900`}>
        <CityProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyCTA />
          <CookieConsent />
        </CityProvider>
      </body>
    </html>
  );
}
