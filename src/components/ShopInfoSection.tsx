"use client";

import React from "react";
import shopData from "@/data/shop-info.json";
import { Clock, MapPin, ExternalLink, Navigation, Compass } from "lucide-react";
import { InstagramIcon } from "./Icons";

export function ShopInfoSection() {
  return (
    <section id="location" className="py-24 bg-[#EFE7DE] text-[#2B0D14] relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 animate-top">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.35em] uppercase text-[#6E2A37] font-semibold mb-3">
            <span className="w-8 h-[1px] bg-[#C69A68]/60" />
            <span>Akid Lotfi • Coastal Oran</span>
            <span className="w-8 h-[1px] bg-[#C69A68]/60" />
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#3E151E] mb-4">
            Hours & Location
          </h2>
          <p className="text-sm md:text-base text-[#6E2A37]/80">
            Visit our coastal coffee & brunch sanctuary at Frange Maritime, Akid Lotfi in Oran.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Operating Hours */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-[#D5C2AE] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between animate-bottom delay-100">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#3E151E] text-[#D5C2AE] flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#C69A68]" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#3E151E] mb-4">
                Opening Hours
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#8C6D75] font-semibold mb-6">
                Serving All Week
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center py-2.5 border-b border-[#D5C2AE]/40">
                  <span className="font-medium text-[#2B0D14]">Monday – Sunday</span>
                  <span className="font-editorial font-bold text-[#3E151E]">08:30 – 23:00</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-[#D5C2AE]/40">
                  <span className="text-[#6E2A37]">Breakfast & Viennoiserie</span>
                  <span className="font-medium text-[#2B0D14]">08:30 – 12:30</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[#6E2A37]">Savory Kitchen & Pizzas</span>
                  <span className="font-medium text-[#2B0D14]">12:00 – 22:30</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-[#FAF7F2] border border-[#D5C2AE]/60 text-xs text-[#6E2A37] flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
              <span>Currently welcoming guests • Fresh brew ready</span>
            </div>
          </div>

          {/* Card 2: Location & Directions */}
          <div className="lg:col-span-4 bg-[#3E151E] text-[#FAF7F2] p-8 rounded-3xl border border-[#D5C2AE]/20 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between animate-bottom delay-200">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2B0D14] text-[#D5C2AE] flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#C69A68]" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#D5C2AE] mb-4">
                Seaside Location
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#D5C2AE]/70 font-semibold mb-6">
                {shopData.location.city}, Algeria
              </p>

              <div className="space-y-3 text-sm text-[#FAF7F2]/80 leading-relaxed">
                <p className="font-medium text-base text-[#FAF7F2]">
                  {shopData.location.address}
                </p>
                <p>Quartier: {shopData.location.neighborhood}</p>
                <p className="text-xs text-[#D5C2AE]/80">
                  Coordonnées GPS: 35.72998° N, -0.58617° W
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D5C2AE]/20 space-y-3">
              <a
                href={shopData.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#D5C2AE] hover:bg-[#FAF7F2] text-[#3E151E] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg transition-all group"
              >
                <Navigation className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Open in Google Maps</span>
              </a>

              <p className="text-center text-[0.7rem] text-[#D5C2AE]/60 uppercase tracking-widest">
                Valet & Street Parking Available
              </p>
            </div>
          </div>

          {/* Card 3: Social & Community */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-[#D5C2AE] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between animate-bottom delay-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#3E151E] text-[#D5C2AE] flex items-center justify-center mb-6">
                <InstagramIcon className="w-6 h-6 text-[#C69A68]" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#3E151E] mb-2">
                Join 35.9K Foodies
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#8C6D75] font-semibold mb-6">
                {shopData.contact.instagramHandle}
              </p>

              <p className="text-sm text-[#6E2A37]/80 leading-relaxed mb-6 font-normal">
                Follow our daily oven bakes, chef specials, behind-the-scenes pastry craft, and upcoming seasonal menus.
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D5C2AE]/50 space-y-2 text-xs">
                <div className="flex justify-between text-[#8C6D75]">
                  <span>Posts:</span>
                  <span className="font-semibold text-[#3E151E]">700+ Creations</span>
                </div>
                <div className="flex justify-between text-[#8C6D75]">
                  <span>Community:</span>
                  <span className="font-semibold text-[#3E151E]">35,900+ Followers</span>
                </div>
                <div className="flex justify-between text-[#8C6D75]">
                  <span>Vibe:</span>
                  <span className="font-semibold text-[#3E151E]">Warm Editorial Hospitality</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href={shopData.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full border border-[#3E151E] hover:bg-[#3E151E] text-[#3E151E] hover:text-[#D5C2AE] text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all"
              >
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
