"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";
import shopData from "@/data/shop-info.json";
import { DispacitoLogo } from "./DispacitoLogo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#2B0D14]/90 backdrop-blur-md shadow-xl py-4 border-b border-[#D5C2AE]/15"
          : "bg-gradient-to-b from-black/60 via-black/25 to-transparent py-6 md:py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
        {/* Left Side: Brand Logo */}
        <DispacitoLogo variant="light" size="md" showSubtitle={true} />

        {/* Right Side: Clean Horizontal Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            href="/"
            className="text-white hover:text-[#D5C2AE] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D5C2AE] hover:after:w-full after:transition-all after:duration-300"
          >
            Accueil
          </Link>
          <Link
            href="#story"
            className="text-white hover:text-[#D5C2AE] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D5C2AE] hover:after:w-full after:transition-all after:duration-300"
          >
            Notre Histoire
          </Link>
          <Link
            href="#menu"
            className="text-white hover:text-[#D5C2AE] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D5C2AE] hover:after:w-full after:transition-all after:duration-300"
          >
            Le Menu
          </Link>
          <Link
            href="#location"
            className="text-white hover:text-[#D5C2AE] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D5C2AE] hover:after:w-full after:transition-all after:duration-300"
          >
            Accès
          </Link>
          <a
            href={shopData.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#D5C2AE] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D5C2AE] hover:after:w-full after:transition-all after:duration-300"
          >
            Instagram
          </a>
          <a
            href={shopData.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-white/60 text-white hover:border-[#D5C2AE] hover:bg-[#D5C2AE] hover:text-[#2B0D14] text-xs tracking-[0.18em] uppercase font-semibold transition-all duration-300"
          >
            Nous Rendre Visite
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Ouvrir le menu"
          className="md:hidden p-2 text-white hover:text-[#D5C2AE] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2B0D14]/95 backdrop-blur-md border-t border-[#D5C2AE]/20 px-6 py-8 animate-fadeIn">
          <div className="flex flex-col gap-5 text-center">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#D5C2AE] py-1 text-sm tracking-[0.25em] uppercase font-medium"
            >
              Accueil
            </Link>
            <Link
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#D5C2AE] py-1 text-sm tracking-[0.25em] uppercase font-medium"
            >
              Notre Histoire
            </Link>
            <Link
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#D5C2AE] py-1 text-sm tracking-[0.25em] uppercase font-medium"
            >
              Le Menu
            </Link>
            <Link
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#D5C2AE] py-1 text-sm tracking-[0.25em] uppercase font-medium"
            >
              Horaires & Accès
            </Link>
            <a
              href={shopData.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#D5C2AE] py-1 text-sm tracking-[0.25em] uppercase font-medium"
            >
              Instagram
            </a>
            <a
              href={shopData.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block mt-2 px-6 py-2.5 rounded-full bg-[#D5C2AE] text-[#2B0D14] text-xs tracking-[0.2em] uppercase font-bold"
            >
              Nous Rendre Visite
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
