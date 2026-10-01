"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "duo";
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { h: 28, w: 112 },
  md: { h: 36, w: 144 },
  lg: { h: 48, w: 192 },
  xl: { h: 64, w: 256 },
};

export function DispacitoLogo({
  variant = "light",
  size = "md",
  showSubtitle = true,
  className = "",
}: LogoProps) {
  const { h, w } = sizeMap[size];

  // On dark backgrounds (Navbar, Footer): invert the dark burgundy logo to white
  // On light backgrounds: show the natural dark burgundy logo
  const filterStyle =
    variant === "light"
      ? { filter: "brightness(0) invert(1)" } // dark logo → pure white
      : variant === "duo"
      ? { filter: "brightness(0) invert(0.88) sepia(0.1)" } // slightly warm white
      : {}; // dark/natural — no filter

  const subColor =
    variant === "dark"
      ? "text-[#6E2A37]"
      : variant === "duo"
      ? "text-[#FAF7F2]/80"
      : "text-[#D5C2AE]";

  return (
    <Link
      href="/"
      className={`inline-flex flex-col items-start group select-none ${className}`}
    >
      <Image
        src="/images/dispacito-logo.jpg"
        alt="Dispacito"
        width={w * 2}
        height={h}
        style={{
          ...filterStyle,
          height: `${h}px`,
          width: "auto",
          maxWidth: "100%",
          objectFit: "contain",
          transition: "opacity 0.2s ease",
        }}
        className="group-hover:opacity-80 transition-opacity duration-200"
        priority
      />
      {showSubtitle && (
        <span
          className={`text-[0.62rem] md:text-[0.68rem] tracking-[0.28em] uppercase font-medium mt-1 ${subColor}`}
        >
          Bakery • Coffee • Brunch
        </span>
      )}
    </Link>
  );
}
