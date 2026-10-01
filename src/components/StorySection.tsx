"use client";

import React from "react";
import Image from "next/image";

export function StorySection() {
  return (
    <section id="story" className="py-28 md:py-36 bg-[#3E151E] text-[#FAF7F2] relative overflow-hidden">
      {/* Background Watermark Texture */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 select-none pointer-events-none text-[#2B0D14]/40 font-editorial font-bold text-[24rem] leading-none z-0"
      >
        D
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl space-y-32 md:space-y-44">
        
        {/* =========================================================================
            CHAPTER I: THE DAWN & THE HEARTH
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Chapter I Image: Floating Gallery Frame with Offset Accent */}
          <div className="lg:col-span-6 relative animate-left">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              {/* Offset decorative architectural hairline */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 sm:-inset-4 rounded-[2.5rem] border border-[#C69A68]/50 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500 pointer-events-none"
              />

              {/* Main Passe-Partout Framed Image */}
              <div className="relative rounded-[2.2rem] overflow-hidden border border-[#D5C2AE]/30 bg-[#280B12] p-3 sm:p-4 shadow-2xl">
                <div className="relative aspect-[4/5] w-full rounded-[1.8rem] overflow-hidden">
                  <Image
                    src="/images/croissant.WebP"
                    alt="Dispacito 27-Layer Butter Croissant"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#280B12]/80 via-transparent to-black/20" />

                  {/* Corner stamp details */}
                  <div className="absolute top-4 left-4 text-[0.65rem] tracking-[0.3em] uppercase text-[#D5C2AE] font-light bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    Atelier 05:00 AM
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-xs text-[#FAF7F2]/90 font-light">
                    <span className="font-editorial italic text-[#C69A68] text-sm block mb-0.5">
                      Viennoiserie Pure Beurre
                    </span>
                    27 micro-laminations crafted before the first light in Oran.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter I Story Text */}
          <div className="lg:col-span-6 space-y-6 animate-right delay-100">
            <div className="flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-[#D5C2AE] font-medium">
              <span className="w-8 h-[1px] bg-[#C69A68]" />
              <span>Chapter I • The Dawn & The Hearth</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAF7F2] leading-[1.08]">
              Where Every Morning Awakens to Golden Butter.
            </h2>

            <p className="font-editorial italic text-xl text-[#D5C2AE] font-normal">
              Slow fermentation, European butter, and the quiet Mediterranean dawn.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
              <p>
                Long before the first guest steps onto the corniche of Akid Lotfi, our ovens are already humming. Baking is not an automated process at Dispacito — it is a tactile, slow-paced art where flour, temperature, and patience collide.
              </p>
              <p>
                Each croissant undergoes a precise seventy-two-hour cold fermentation process, allowing the dough to develop deep aromatic complexities. Hand-laminated layer upon layer with pure cultured butter, our pastries emerge golden, shatteringly crisp on the outside, and soft with an airy honeycomb crumb within.
              </p>
              <p>
                It is this quiet devotion to purity that transforms a simple morning bite into an unforgettable daily ritual.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs tracking-[0.25em] uppercase text-[#C69A68]">
              <span>72-Hour Dough</span>
              <span>•</span>
              <span>Pure Butter</span>
              <span>•</span>
              <span>Baked Fresh Daily</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER II: THE ALCHEMY OF EXTRACTION (Alternating Layout)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Chapter II Story Text (Left) */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1 animate-left delay-100">
            <div className="flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-[#D5C2AE] font-medium">
              <span className="w-8 h-[1px] bg-[#C69A68]" />
              <span>Chapter II • The Alchemy of Extraction</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAF7F2] leading-[1.08]">
              Millimeter Precision in Every Pour.
            </h2>

            <p className="font-editorial italic text-xl text-[#D5C2AE] font-normal">
              High-altitude Arabica beans, calibrated pressure, and silky microfoam.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
              <p>
                We look at espresso through the lens of craftsmanship. A single millimeter adjustment on our grinders alters the extraction flow rate; a two-degree variation in water temperature unlocks entirely distinct notes of bergamot, dark cacao, or roasted hazelnuts.
              </p>
              <p>
                Our baristas dial in our grinders multiple times throughout the day to adapt to humidity and temperature by the seaside. Whether you order an intense ristretto, a smooth velvety flat white, or an iced ceremonial matcha latte, every cup is calibrated with scientific exactness and poured with warmth.
              </p>
              <p>
                There are no shortcuts here. Just the sacred chemistry of water, pressure, and carefully sourced beans.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs tracking-[0.25em] uppercase text-[#C69A68]">
              <span>Single Origin</span>
              <span>•</span>
              <span>9-Bar Extraction</span>
              <span>•</span>
              <span>65°C Silk Milk</span>
            </div>
          </div>

          {/* Chapter II Image: Arched Vault Frame with Double Border */}
          <div className="lg:col-span-6 relative order-1 lg:order-2 animate-right">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              {/* Outer arch halo */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 sm:-inset-4 rounded-t-[7rem] rounded-b-[2.5rem] border border-[#D5C2AE]/25 -translate-x-3 translate-y-3 sm:-translate-x-4 sm:translate-y-4 group-hover:-translate-x-5 group-hover:translate-y-5 transition-transform duration-500 pointer-events-none"
              />

              {/* Main Arched Frame */}
              <div className="relative rounded-t-[6.5rem] rounded-b-[2.2rem] overflow-hidden border border-[#D5C2AE]/35 bg-[#240A10] p-3 sm:p-4 shadow-2xl">
                <div className="relative aspect-[4/5] w-full rounded-t-[5.5rem] rounded-b-[1.8rem] overflow-hidden">
                  <Image
                    src="/images/cappuccino.WebP"
                    alt="Dispacito Specialty Coffee Extraction"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#240A10]/85 via-transparent to-black/20" />

                  {/* Corner stamp details */}
                  <div className="absolute top-6 right-6 text-[0.65rem] tracking-[0.3em] uppercase text-[#FAF7F2] font-light bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    Origin Calibration
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-xs text-[#FAF7F2]/90 font-light">
                    <span className="font-editorial italic text-[#C69A68] text-sm block mb-0.5">
                      Artisan Barista Bar
                    </span>
                    Balanced notes of cocoa nibs, sweet caramel, and velvety crema.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHAPTER III: THE COASTAL GATHERING
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Chapter III Image: Overlapping Asymmetrical Duo-Composition */}
          <div className="lg:col-span-6 relative animate-left">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              {/* Backing framed photograph */}
              <div className="relative rounded-[2.2rem] overflow-hidden border border-[#D5C2AE]/30 bg-[#280B12] p-3 sm:p-4 shadow-2xl">
                <div className="relative aspect-[4/5] w-full rounded-[1.8rem] overflow-hidden">
                  <Image
                    src="/images/French-test.WebP"
                    alt="Dispacito French Toast and Brunch Spread"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#280B12]/80 via-transparent to-black/20" />
                </div>
              </div>

              {/* Overlapping Floating Polaroid Accent */}
              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden bg-[#FAF7F2] p-2.5 shadow-2xl border border-[#D5C2AE] rotate-3 group-hover:rotate-0 transition-transform duration-500 hidden sm:block">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#2B0D14]">
                  <Image
                    src="/images/American-breakfast.WebP"
                    alt="Brunch Gathering at Dispacito"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div className="pt-2 text-center">
                  <span className="font-editorial text-xs font-bold text-[#3E151E] block">
                    Seaside Brunch
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-wider text-[#8C6D75]">
                    Akid Lotfi • Oran
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter III Story Text */}
          <div className="lg:col-span-6 space-y-6 animate-right delay-100">
            <div className="flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-[#D5C2AE] font-medium">
              <span className="w-8 h-[1px] bg-[#C69A68]" />
              <span>Chapter III • The Coastal Gathering</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAF7F2] leading-[1.08]">
              A Space Where Time Slows Along the Sea.
            </h2>

            <p className="font-editorial italic text-xl text-[#D5C2AE] font-normal">
              Brunch plates, warm conversation, and a haven for 35,000 lovers of craft.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
              <p>
                Dispacito was never meant to be a transient stop where you grab a drink and rush away. Located along the open expanse of the Frange Maritime in Akid Lotfi, our space was thoughtfully sculpted as a coastal sanctuary.
              </p>
              <p>
                Here, sunlight pours through expansive windows onto linen-draped tables. Friends gather over sizzling skillet shakshukas, caramelized French toasts, and savory stone-baked panini. Laughter carries effortlessly over acoustic melodies and the hiss of steam wands.
              </p>
              <p>
                From lone writers savoring quiet afternoons to vibrant weekend brunch tables with families, Dispacito is the heartbeat of a growing community in Oran that cherishes the art of living well.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs tracking-[0.25em] uppercase text-[#C69A68]">
              <span>Mediterranean Air</span>
              <span>•</span>
              <span>All-Day Brunch</span>
              <span>•</span>
              <span>35K+ Community</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
