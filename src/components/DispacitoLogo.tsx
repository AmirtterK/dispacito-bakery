"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "cream" | "duo";
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { h: 26, w: 91 },
  md: { h: 36, w: 126 },
  lg: { h: 52, w: 182 },
  xl: { h: 68, w: 238 },
};

export function DispacitoLogo({
  variant = "light",
  size = "md",
  showSubtitle = true,
  className = "",
}: LogoProps) {
  const { h, w } = sizeMap[size];

  // Transparent PNG selection:
  // - dark: rich burgundy lettering for light/cream backgrounds
  // - cream: warm off-white for subtle contrast
  // - light / duo: pure crisp white lettering for dark backgrounds (navbar, footer, hero)
  const logoSrc =
    variant === "dark"
      ? "/images/dispacito-logo-dark.png"
      : variant === "cream"
      ? "/images/dispacito-logo-cream.png"
      : "/images/dispacito-logo-white.png";

  const subColor =
    variant === "dark"
      ? "text-[#6E2A37]"
      : variant === "cream" || variant === "duo"
      ? "text-[#FAF7F2]/80"
      : "text-[#D5C2AE]";

  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-start group select-none ${className}`}
    >
      <div className="relative inline-block" style={{ height: `${h}px` }}>
        <Image
          src={logoSrc}
          alt="Dispacito"
          width={w}
          height={h}
          priority
          className="h-full w-auto object-contain group-hover:opacity-85 transition-opacity duration-200"
        />
      </div>
      {showSubtitle && (
        <span
          className={`text-[0.6rem] md:text-[0.66rem] tracking-[0.26em] uppercase font-medium mt-1 ${subColor}`}
        >
          Bakery • Coffee • Brunch
        </span>
      )}
    </Link>
  );
}
