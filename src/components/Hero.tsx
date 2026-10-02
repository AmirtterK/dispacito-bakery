"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, MapPin, Coffee } from "lucide-react";
import shopData from "@/data/shop-info.json";
import { DispacitoLogo } from "./DispacitoLogo";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#3E151E]">
      {/* Editorial Duo-Block Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh]">
        {/* LEFT PANEL: Deep Burgundy Wine Section */}
        <div className="lg:col-span-7 xl:col-span-8 bg-[#3E151E] text-[#FAF7F2] pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-8 sm:px-12 md:px-16 lg:px-20 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-[#D5C2AE]/15">
          {/* Subtle Watermark 'D' Monogram */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 text-[#4A1B25]/40 select-none pointer-events-none font-editorial font-bold text-[28rem] md:text-[38rem] leading-none z-0"
          >
            D
          </div>

          {/* Top Editorial Overline */}
          <div className="relative z-10 flex items-center justify-between gap-4 mb-8 animate-top">
            <div className="flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-[#D5C2AE] font-medium">
              <span className="w-6 h-[1px] bg-[#C69A68]" />
              <span>Oran • Sanctuaire Côtier</span>
            </div>

            <span className="text-[#D5C2AE]/60 text-xs tracking-[0.25em] uppercase font-light hidden sm:inline-block">
              {shopData.established}
            </span>
          </div>

          {/* Central Editorial Statement */}
          <div className="relative z-10 my-auto py-6 animate-left delay-100">
            <div className="relative inline-block mb-4">
              <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#FAF7F2] leading-[1.04]">
                UN NOUVEAU <br />
                <span className="font-editorial italic font-normal text-[#D5C2AE]">CHAPITRE</span> <br />
                S'OUVRE.
              </h1>

              {/* Minimal Line Art illustration overlay */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -right-12 top-4 md:-right-24 md:top-2 opacity-35 pointer-events-none animate-pulse"
              >
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 200 200"
                  fill="none"
                  stroke="#D5C2AE"
                  strokeWidth="1.2"
                >
                  <path d="M50 80 H140 C140 130 110 150 95 150 C80 150 50 130 50 80 Z" />
                  <path d="M140 95 C155 95 165 105 165 118 C165 130 155 138 140 138" />
                  <path d="M35 150 H155" />
                  <path d="M75 65 Q70 45 80 30" />
                  <path d="M95 65 Q90 40 100 25" />
                  <path d="M115 65 Q110 45 120 30" />
                  <path d="M80 160 C110 155 140 165 150 180 C130 185 100 180 80 160 Z" />
                </svg>
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-[#D5C2AE] font-light tracking-wide max-w-xl mb-4 leading-relaxed">
              Brunch. Café. Boulangerie. <br />
              <span className="text-[#FAF7F2] font-normal">Quelque chose de nouveau arrive à Oran.</span>
            </p>

            <p className="text-sm md:text-base text-[#FAF7F2]/75 max-w-lg mb-8 font-light leading-relaxed">
              {shopData.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D5C2AE] text-[#3E151E] font-semibold text-sm tracking-wider uppercase hover:bg-[#FAF7F2] hover:shadow-2xl hover:-translate-y-1 transition-all group"
              >
                <span>{shopData.hero.ctaMenu}</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={shopData.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#D5C2AE]/40 text-[#FAF7F2] font-medium text-sm tracking-wider uppercase hover:bg-[#2B0D14] hover:border-[#D5C2AE] hover:-translate-y-1 transition-all"
              >
                <MapPin className="w-4 h-4 text-[#C69A68]" />
                <span>Akid Lotfi • Maps</span>
              </a>
            </div>
          </div>

          {/* Bottom Wordmark & Category Indicators */}
          <div className="relative z-10 pt-8 border-t border-[#D5C2AE]/15 flex flex-wrap items-center justify-between gap-4 animate-bottom delay-200">
            <DispacitoLogo variant="light" size="sm" showSubtitle={false} />

            <div className="flex items-center gap-6 text-xs text-[#D5C2AE]/80 tracking-widest uppercase">
              <span>Viennoiserie Fraîche</span>
              <span>•</span>
              <span>Bar Espresso</span>
              <span>•</span>
              <span>Cuisine Gastronomique</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Warm Oatmeal Beige Section */}
        <div className="lg:col-span-5 xl:col-span-4 bg-[#D5C2AE] text-[#3E151E] pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-8 sm:px-12 lg:px-12 flex flex-col justify-between relative overflow-hidden animate-right">
          {/* Vertical Giant Typography */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[#3E151E]/15 font-editorial font-bold text-8xl tracking-wider uppercase origin-center rotate-90 animate-fade delay-300"
            style={{ writingMode: "vertical-rl" }}
          >
            Dispacito
          </div>

          {/* Top Info Card */}
          <div className="relative z-10 space-y-4 animate-top delay-100">
            <div className="flex items-center justify-between border-b border-[#3E151E]/20 pb-4">
              <span className="text-xs uppercase tracking-[0.28em] font-medium text-[#6E2A37]">
                Atelier Sanctuaire
              </span>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#3E151E]">
                Ouvert 7/7
              </span>
            </div>

            <h2 className="font-editorial text-2xl sm:text-3xl font-bold leading-tight text-[#3E151E]">
              Chaque matin s'éveille au beurre doré et au café fraîchement torréfié.
            </h2>
            <p className="text-sm text-[#3E151E]/80 leading-relaxed font-normal">
              Situé en bordure maritime d'Akid Lotfi, nos portes s'ouvrent chaque matin dès 08h30 pour les voyageurs, les voisins et les connaisseurs.
            </p>
          </div>

          {/* Visual Showcase Card */}
          <div className="relative z-10 my-8 animate-scale delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#3E151E]/20 group hover:-translate-y-1.5 transition-transform duration-500">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/red-mirror-cake-hero.jpg"
                  alt="Entremet Miroir aux Fruits Rouges — Dispacito"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  priority
                />

                {/* Text overlay: gradient starts at the bottom edge of the pic and fades upward */}
                <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-28 text-[#FAF7F2] bg-gradient-to-t from-[#3E151E] via-[#3E151E]/80 to-transparent">
                  <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#C69A68] font-semibold block mb-1">
                    Pâtisserie Fine & Entremets
                  </span>
                  <h3 className="font-editorial text-xl font-bold">Entremet Miroir Fruits Rouges</h3>
                  <p className="text-xs text-[#D5C2AE] mt-1 line-clamp-2">
                    Mousse framboise, glaçage miroir rouge laqué, mûres fraîches et pensée comestible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Schedule Footer */}
          <div className="relative z-10 pt-4 border-t border-[#3E151E]/20 flex items-center justify-between text-xs tracking-wider uppercase font-medium text-[#3E151E] animate-bottom delay-300">
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-[#6E2A37]" />
              <span>Espresso & Viennoiserie dès 08h30</span>
            </div>
            <a
              href="#story"
              className="text-[#3E151E] hover:text-[#6E2A37] underline underline-offset-4"
            >
              En Savoir Plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
