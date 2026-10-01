import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";
import { MenuSection } from "@/components/MenuSection";
import { ShopInfoSection } from "@/components/ShopInfoSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAF7F2]">
      <Navbar />
      <Hero />
      <StorySection />
      <MenuSection />
      <ShopInfoSection />
      <Footer />
    </main>
  );
}
