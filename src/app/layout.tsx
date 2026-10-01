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
  title: `${shopData.name} | ${shopData.tagline} — Oran, Algeria`,
  description: `${shopData.hero.headline} ${shopData.hero.subheadline} Visit Dispacito at Frange Maritime, Akid Lotfi in Oran for artisanal viennoiserie, specialty coffee, and gourmet brunch.`,
  keywords: [
    "Dispacito",
    "Dispacito Oran",
    "dispacito_cake",
    "Bakery Oran",
    "Coffee Shop Oran",
    "Brunch Oran",
    "Akid Lotfi",
    "Frange Maritime",
    "Algeria Cafe",
  ],
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
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FAF7F2] text-[#2B0D14] antialiased min-h-screen flex flex-col selection:bg-[#3E151E] selection:text-[#FAF7F2]">
        <ScrollAnimationProvider>
          {children}
        </ScrollAnimationProvider>
      </body>
    </html>
  );
}
