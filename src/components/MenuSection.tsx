"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { MenuItem } from "@/types";
import menuData from "@/data/menu.json";
import { Search, X, ArrowUpRight } from "lucide-react";

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Filter categories matching user screenshot
  const filterCategories = [
    { id: "all", label: "All" },
    { id: "coffee", label: "Coffee" },
    { id: "bakery", label: "Bakery" },
    { id: "brunch", label: "Breakfast" },
    { id: "restaurant", label: "Restaurant" },
  ];

  const allItems: MenuItem[] = menuData.items as MenuItem[];

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allItems, activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#FAF7F2] text-[#2B0D14] relative overflow-hidden">
      {/* Decorative Monogram */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-4 select-none pointer-events-none text-[#D5C2AE]/20 font-editorial font-bold text-[14rem] md:text-[20rem] z-0 leading-none"
      >
        Menu
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        {/* Exact "Our Menu" Section Header matching user screenshot */}
        <div className="text-center mb-10 md:mb-14 animate-top">
          <div className="flex items-center justify-center gap-3 mb-2 text-[#C69A68]">
            <span className="h-[1px] w-12 bg-[#C69A68]/40" />
            <span className="font-editorial text-lg animate-spin-slow">✦</span>
            <span className="h-[1px] w-12 bg-[#C69A68]/40" />
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#4A2619] sm:text-[#523321]">
            Our Menu
          </h2>
        </div>

        {/* Exact Filter Pills matching user screenshot */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-14 animate-bottom delay-100">
          {filterCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`transition-all duration-300 rounded-full px-7 sm:px-8 py-2.5 text-sm sm:text-base font-editorial tracking-wide cursor-pointer ${
                  isActive
                    ? "bg-[#5A3825] text-white shadow-md transform -translate-y-0.5 border border-[#5A3825]"
                    : "bg-transparent text-[#5A3825] border border-[#C5A886] hover:bg-[#5A3825]/8 hover:border-[#5A3825] hover:-translate-y-0.5"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-14 animate-bottom delay-200">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8C6D75] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes, pastries, drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 bg-white/90 rounded-full border border-[#D5C2AE] text-sm text-[#2B0D14] placeholder-[#8C6D75]/70 focus:outline-none focus:border-[#5A3825] focus:ring-1 focus:ring-[#5A3825] shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Aesthetic & Original Editorial Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#D5C2AE]/50 p-8 animate-scale">
            <p className="font-editorial text-2xl text-[#3E151E] mb-2">No selections found</p>
            <p className="text-sm text-[#8C6D75] mb-6">Try another search keyword or switch categories.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="px-7 py-2.5 rounded-full bg-[#5A3825] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#3E151E] transition-all"
            >
              Show All Menu
            </button>
          </div>
        ) : (
          <div
            key={activeCategory + searchQuery}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-9"
          >
            {filteredItems.map((item, idx) => {
              const delay = Math.min((idx % 8) * 0.06, 0.5);
              const itemNumber = String(idx + 1).padStart(2, "0");

              return (
                <article
                  key={`${activeCategory}-${item.id}`}
                  onClick={() => setSelectedItem(item)}
                  style={{ animationDelay: `${delay}s` }}
                  className="animate-card-fade group relative bg-[#FFFDF9] rounded-t-[2.4rem] rounded-b-2xl border border-[#D5C2AE]/60 hover:border-[#C69A68] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_35px_-10px_rgba(62,21,30,0.12)] transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
                >
                  {/* Card Top Details */}
                  <div>
                    {/* Arched Window Image Frame */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[1.9rem] rounded-b-xl bg-[#EFE7DE] border border-[#D5C2AE]/30">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />

                      {/* Gentle warm tint on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2B0D14]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Elegant corner index number (No badge) */}
                      <div className="absolute top-2.5 left-3 font-editorial italic text-xs tracking-wider text-[#FAF7F2] drop-shadow-md">
                        N° {itemNumber}
                      </div>

                      {/* Subtle category tag (No pill badge) */}
                      <div className="absolute top-2.5 right-3 text-[0.62rem] tracking-[0.25em] uppercase text-[#FAF7F2] font-medium drop-shadow-md">
                        {item.category}
                      </div>
                    </div>

                    {/* Editorial Title & Price Row */}
                    <div className="pt-4 px-1">
                      <div className="flex items-baseline justify-between gap-2 mb-1.5">
                        <h3 className="font-editorial text-lg md:text-xl font-bold text-[#3E151E] group-hover:text-[#7A3622] transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <div className="h-[1px] flex-1 border-b border-dotted border-[#D5C2AE]/70 mx-2 mb-1 hidden sm:block" />
                        <span className="font-editorial font-bold text-base md:text-lg text-[#5A3825] whitespace-nowrap">
                          {item.price}{" "}
                          <span className="text-[0.65rem] font-sans font-medium text-[#8C6D75] uppercase tracking-wider">
                            DA
                          </span>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#6E2A37]/80 line-clamp-2 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Subtle Bottom Link */}
                  <div className="pt-3 mt-4 border-t border-[#D5C2AE]/35 px-1 flex items-center justify-between text-[0.7rem] text-[#8C6D75]">
                    <span className="font-editorial italic text-[#C69A68] text-xs">
                      {item.badge ? item.badge : "Artisanal Recipe"}
                    </span>
                    <span className="flex items-center gap-1 group-hover:text-[#3E151E] group-hover:translate-x-0.5 transition-all">
                      <span>View</span>
                      <ArrowUpRight className="w-3 h-3 text-[#C69A68]" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Item Quick-View Detail Modal (No badges) */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#FAF7F2] rounded-3xl overflow-hidden max-w-lg w-full border border-[#D5C2AE] shadow-2xl relative animate-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#3E151E] flex items-center justify-center shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-[#EFE7DE]">
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              {/* Clean typographic category overline (No badge) */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-medium text-[#C69A68] mb-1.5">
                <span className="w-4 h-[1px] bg-[#C69A68]" />
                <span>Artisanal Selection • {selectedItem.category}</span>
              </div>

              <h3 className="font-editorial text-2xl md:text-3xl font-bold text-[#3E151E] mb-3">
                {selectedItem.name}
              </h3>
              <p className="text-sm text-[#5C232F] leading-relaxed mb-6 font-light">
                {selectedItem.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#D5C2AE]/50">
                <span className="text-xs text-[#8C6D75] uppercase tracking-wider">
                  Menu Price
                </span>
                <span className="font-editorial text-2xl font-bold text-[#5A3825]">
                  {selectedItem.formattedPrice}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
