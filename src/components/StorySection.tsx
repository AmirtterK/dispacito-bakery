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
            CHAPITRE I: LA PAUSE FRAÎCHE
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
                    src="/images/coffee-frappe.WebP"
                    alt="Café frappé glacé Dispacito"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#280B12]/80 via-transparent to-black/20" />

                  <div className="absolute bottom-4 left-4 right-4 text-sm text-[#FAF7F2]/90 font-light">
                    <span className="font-editorial italic text-[#C69A68] text-base block mb-0.5">
                      Café frappé
                    </span>
                    Café, lait et fraîcheur réunis dans un frappé onctueux.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter I Story Text */}
          <div className="lg:col-span-6 space-y-6 animate-right delay-100">
            <div className="flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-[#D5C2AE] font-medium">
              <span className="w-8 h-[1px] bg-[#C69A68]" />
              <span>Chapitre I • La Pause Fraîche</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAF7F2] leading-[1.08]">
              La Fraîcheur d&apos;un Café Frappé, à Tout Moment.
            </h2>

            <p className="font-editorial italic text-xl text-[#D5C2AE] font-normal">
              Café intense, lait onctueux et fraîcheur glacée.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
              <p>
                Pour une pause fraîche à Akid Lotfi, notre café frappé marie la richesse du café à une texture douce et glacée. Une recette simple, préparée avec soin et idéale à savourer à tout moment de la journée.
              </p>
              <p>
                Servi bien frais, il accompagne une matinée ensoleillée comme une pause après le déjeuner, avec l&apos;équilibre gourmand du café et du lait.
              </p>
              <p>
                Retrouvez le plaisir d&apos;un classique glacé, généreux et réconfortant.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs tracking-[0.25em] uppercase text-[#C69A68]">
              <span>Café</span>
              <span>•</span>
              <span>Glacé</span>
              <span>•</span>
              <span>Onctueux</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHAPITRE II: LA DOUCEUR DU CHEESECAKE
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Chapter II Story Text (Left) */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1 animate-left delay-100">
            <div className="flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-[#D5C2AE] font-medium">
              <span className="w-8 h-[1px] bg-[#C69A68]" />
              <span>Chapitre II • La Douceur du Cheesecake</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAF7F2] leading-[1.08]">
              Un Cheesecake Fondant, Nappé de Chocolat.
            </h2>

            <p className="font-editorial italic text-xl text-[#D5C2AE] font-normal">
              Une part généreuse, une texture fondante et un filet de chocolat.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
              <p>
                Notre cheesecake séduit par son cœur crémeux et sa douceur délicate. Sa part généreuse révèle une texture lisse et fondante à chaque bouchée.
              </p>
              <p>
                Le nappage de chocolat apporte une note intense qui équilibre la douceur du gâteau. À partager ou à garder pour soi, c&apos;est une pause gourmande qui accompagne parfaitement un café.
              </p>
              <p>
                Servi à l&apos;assiette et nappé au dernier moment, ce dessert met à l&apos;honneur le plaisir des choses simples et bien faites.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs tracking-[0.25em] uppercase text-[#C69A68]">
              <span>Crémeux</span>
              <span>•</span>
              <span>Chocolat</span>
              <span>•</span>
              <span>À partager</span>
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
                    src="/images/chapter-2-chocolate-cheesecake.png"
                    alt="Gâteau au fromage nappé de chocolat"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#240A10]/85 via-transparent to-black/20" />

                  <div className="absolute bottom-4 left-4 right-4 text-sm text-[#FAF7F2]/90 font-light">
                    <span className="font-editorial italic text-[#C69A68] text-base block mb-0.5">
                      Cheesecake au Chocolat
                    </span>
                    Cheesecake fondant servi avec un nappage de chocolat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CHAPITRE III: LES COOKIES GOURMANDS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Chapter III Image: Overlapping Asymmetrical Duo-Composition */}
          <div className="lg:col-span-6 relative animate-left">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              {/* Backing framed photograph */}
              <div className="relative rounded-[2.2rem] overflow-hidden border border-[#D5C2AE]/30 bg-[#280B12] p-3 sm:p-4 shadow-2xl">
                <div className="relative aspect-[4/5] w-full rounded-[1.8rem] overflow-hidden">
                  <Image
                    src="/images/chapter-3-cookie-tray.png"
                    alt="Assortiment de biscuits gourmands"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#280B12]/80 via-transparent to-black/20" />
                  <div className="absolute bottom-4 left-4 right-4 text-sm text-[#FAF7F2]/90 font-light">
                    <span className="font-editorial italic text-[#C69A68] text-base block mb-0.5">
                      Cookies Gourmands
                    </span>
                    Assortiment de douceurs à partager.
                  </div>
                </div>
              </div>

              {/* Overlapping Floating Polaroid Accent */}
              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden bg-[#FAF7F2] p-2.5 shadow-2xl border border-[#D5C2AE] rotate-3 group-hover:rotate-0 transition-transform duration-500 hidden sm:block">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#2B0D14]">
                  <Image
                    src="/images/iced-latte.WebP"
                    alt="Café latte glacé au bord de la mer"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div className="pt-2 text-center">
                  <span className="font-editorial text-xs font-bold text-[#3E151E] block">
                    Latte Glacé
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-wider text-[#8C6D75]">
                    Café & fraîcheur
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter III Story Text */}
          <div className="lg:col-span-6 space-y-6 animate-right delay-100">
            <div className="flex items-center gap-3 text-xs tracking-[0.32em] uppercase text-[#D5C2AE] font-medium">
              <span className="w-8 h-[1px] bg-[#C69A68]" />
              <span>Chapitre III • Les Cookies Gourmands</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAF7F2] leading-[1.08]">
              Des Cookies Dorés, Pour Toutes les Envies.
            </h2>

            <p className="font-editorial italic text-xl text-[#D5C2AE] font-normal">
              Une pâte généreuse, des garnitures variées et de quoi régaler toute la table.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#FAF7F2]/80 leading-relaxed font-light">
              <p>
                Dorés au four et garnis de saveurs gourmandes, nos cookies sont faits pour accompagner une pause généreuse. À chacun son favori, du chocolat fondant aux garnitures crémeuses.
              </p>
              <p>
                Réunis sur un plateau, ils invitent au partage : choisissez une douceur, goûtez-en une autre, et accompagnez le tout d&apos;un café ou d&apos;une boisson fraîche.
              </p>
              <p>
                Pour une petite faim ou une envie à partager, ces cookies apportent une touche réconfortante à chaque moment de la journée.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs tracking-[0.25em] uppercase text-[#C69A68]">
              <span>Faits avec soin</span>
              <span>•</span>
              <span>À partager</span>
              <span>•</span>
              <span>Pause Gourmande</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
