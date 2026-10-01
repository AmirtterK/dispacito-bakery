"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "duo";
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
  useImage?: boolean;
  className?: string;
}

export function DispacitoLogo({
  variant = "light",
  size = "md",
  showSubtitle = true,
  useImage = false,
  className = "",
}: LogoProps) {
  const textColor =
    variant === "dark"
      ? "text-[#3E151E]"
      : variant === "duo"
      ? "text-[#D5C2AE]"
      : "text-[#FAF7F2]";

  const subColor =
    variant === "dark"
      ? "text-[#6E2A37]"
      : variant === "duo"
      ? "text-[#FAF7F2]/80"
      : "text-[#D5C2AE]";

  const sizeClasses = {
    sm: "text-2xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
  }[size];

  return (
    <Link href="/" className={`inline-flex flex-col items-center group text-center select-none ${className}`}>
      {useImage ? (
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D5C2AE]/40 shadow-sm">
          <Image
            src="/brand/logo.jpg"
            alt="Dispacito Logo"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <>
          <span
            className={`font-editorial font-bold tracking-tight transition-transform duration-300 group-hover:scale-[1.02] ${textColor} ${sizeClasses}`}
            style={{
              letterSpacing: "-0.02em",
              textShadow: variant === "light" ? "0 2px 10px rgba(0,0,0,0.15)" : "none",
            }}
          >
            Dispacito
          </span>
          {showSubtitle && (
            <span
              className={`text-[0.62rem] md:text-[0.68rem] tracking-[0.28em] uppercase font-medium mt-0.5 ${subColor}`}
            >
              Bakery • Coffee • Brunch
            </span>
          )}
        </>
      )}
    </Link>
  );
}
