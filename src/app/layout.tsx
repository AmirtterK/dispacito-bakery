import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ScrollAnimationProvider } from "@/components/ScrollAnimationProvider";
import shopData from "@/data/shop-info.json";

const playfair = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${shopData.name} | ${shopData.tagline} — Oran, Algérie`,
  description: `${shopData.hero.headline} ${shopData.hero.subheadline} Découvrez Dispacito sur la Frange Maritime, Akid Lotfi à Oran : pâtisseries artisanales, café de spécialité et brunch raffiné.`,
  keywords: [
    "Dispacito",
    "Dispacito Oran",
    "dispacito_cake",
    "Boulangerie Oran",
    "Pâtisserie Oran",
    "Café Oran",
    "Brunch Oran",
    "Akid Lotfi",
    "Frange Maritime",
    "Algérie Café",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: `${shopData.name} — ${shopData.tagline}`,
    description: shopData.hero.description,
    url: "https://dispacito.dz",
    siteName: shopData.name,
    locale: "fr_DZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FAF7F2] text-[#2B0D14] antialiased min-h-screen flex flex-col selection:bg-[#3E151E] selection:text-[#FAF7F2]">
        <ScrollAnimationProvider>
          {children}
        </ScrollAnimationProvider>
      </body>
    </html>
  );
}
