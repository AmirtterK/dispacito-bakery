"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { Check } from "lucide-react";

export function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounceIn">
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#3E151E] text-[#FAF7F2] border border-[#D5C2AE]/40 shadow-2xl backdrop-blur-md">
        <div className="w-5 h-5 rounded-full bg-[#C69A68] text-[#2B0D14] flex items-center justify-center flex-shrink-0">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
        <span className="text-xs sm:text-sm font-medium tracking-wide">
          {toastMessage}
        </span>
      </div>
    </div>
  );
}
