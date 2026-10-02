"use client";

import React from "react";
import Link from "next/link";
import shopData from "@/data/shop-info.json";
import { DispacitoLogo } from "./DispacitoLogo";
import { MapPin, Clock, ChevronUp } from "lucide-react";
import { InstagramIcon } from "./Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2B0D14] text-[#FAF7F2] border-t border-[#D5C2AE]/15 pt-20 pb-12 relative">
      {/* Bakery Template Circular Back to Top Floating Button */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="w-14 h-14 rounded-full bg-[#2B0D14] text-[#D5C2AE] hover:text-[#FAF7F2] border-2 border-[#D5C2AE]/40 flex items-center justify-center shadow-2xl hover:border-[#D5C2AE] hover:scale-105 transition-all group"
        >
          <ChevronUp className="w-6 h-6 animate-showsUp group-hover:scale-110" />
        </button>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#D5C2AE]/15 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4 animate-left">
            <DispacitoLogo variant="light" size="lg" className="!items-start" />
            <p className="text-sm text-[#D5C2AE]/80 max-w-sm font-light leading-relaxed pt-2">
              Un havre côtier d&apos;artisanat où haute viennoiserie, café de spécialité et brunch gourmand s&apos;unissent dans une atmosphère élégante et chaleureuse.
            </p>
            <p className="text-xs text-[#D5C2AE]/60 uppercase tracking-widest pt-2">
              {shopData.location.address} • {shopData.location.city}, Algérie
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 animate-top delay-100">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C69A68] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#D5C2AE]/80">
              <li>
                <Link href="#menu" className="hover:text-[#FAF7F2] transition-colors">
                  Notre Carte & Sélections
                </Link>
              </li>
              <li>
                <Link href="#story" className="hover:text-[#FAF7F2] transition-colors">
                  L&apos;Histoire Dispacito
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-[#FAF7F2] transition-colors">
                  Horaires & Accès Maritime
                </Link>
              </li>
              <li>
                <a
                  href={shopData.location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF7F2] transition-colors"
                >
                  Itinéraire Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Hours */}
          <div className="md:col-span-4 space-y-4 animate-right delay-200">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C69A68] font-bold">
              Atelier Oran
            </h4>
            <div className="text-sm text-[#D5C2AE]/80 space-y-1">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C69A68]" />
                <span>{shopData.hours.days} : {shopData.hours.time}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C69A68]" />
                <span>{shopData.location.address}, {shopData.location.neighborhood}</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={shopData.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3E151E] hover:bg-[#4E1C27] text-[#D5C2AE] hover:text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider border border-[#D5C2AE]/30 transition-all hover:-translate-y-0.5"
              >
                <InstagramIcon className="w-4 h-4 text-[#C69A68]" />
                <span>{shopData.contact.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D5C2AE]/60 gap-4">
          <p>
            © {new Date().getFullYear()} {shopData.name}. Tous droits réservés.
          </p>
          <p className="tracking-widest uppercase text-[0.65rem]">
            Boulangerie • Café de Spécialité • Brunch • Oran
          </p>
        </div>
      </div>
    </footer>
  );
}
