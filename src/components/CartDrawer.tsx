"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";
import shopData from "@/data/shop-info.json";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    totalAmount,
  } = useCart();

  const [orderType, setOrderType] = useState<"dine-in" | "takeaway">("dine-in");
  const [tableNumber, setTableNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (items.length === 0) return;
    setOrderPlaced(true);
  };

  const resetOrder = () => {
    clearCart();
    setOrderPlaced(false);
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
      {/* Click outside to close */}
      <div
        className="flex-1 cursor-pointer"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="w-full max-w-md bg-[#FAF7F2] text-[#2B0D14] h-full shadow-2xl flex flex-col justify-between border-l border-[#D5C2AE] z-10 animate-slideLeft">
        {/* Drawer Header */}
        <div className="p-6 bg-[#3E151E] text-[#FAF7F2] flex items-center justify-between border-b border-[#D5C2AE]/20">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#D5C2AE]" />
            <div>
              <h2 className="font-editorial text-xl font-bold tracking-tight">Your Order</h2>
              <p className="text-xs text-[#D5C2AE]">
                {totalCount} {totalCount === 1 ? "item" : "items"} selected
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            className="w-8 h-8 rounded-full bg-[#2B0D14] hover:bg-[#4E1C27] text-[#D5C2AE] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {orderPlaced ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#3E151E] text-[#D5C2AE] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-[#C69A68]" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#3E151E]">
                Order Received!
              </h3>
              <p className="text-sm text-[#6E2A37]/80 max-w-xs mx-auto leading-relaxed">
                Thank you{customerName ? `, ${customerName}` : ""}! Your order ({orderType === "dine-in" ? `Table ${tableNumber || "Selected"}` : "Takeaway"}) has been prepared for the Dispacito barista team.
              </p>
              <div className="p-4 bg-[#EFE7DE] rounded-xl text-xs space-y-1 text-[#2B0D14] text-left">
                <div className="flex justify-between font-semibold">
                  <span>Total Amount:</span>
                  <span>{totalAmount} DA</span>
                </div>
                <div className="flex justify-between text-[#6E2A37]">
                  <span>Status:</span>
                  <span className="text-green-700 font-medium">In Preparation (Kitchen)</span>
                </div>
              </div>
              <button
                onClick={resetOrder}
                className="mt-6 w-full py-3 rounded-full bg-[#3E151E] text-[#D5C2AE] text-xs uppercase tracking-widest font-semibold hover:bg-[#2B0D14] transition-all"
              >
                Close & Return
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EFE7DE] text-[#6E2A37] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-7 h-7 text-[#8C6D75]" />
              </div>
              <p className="font-editorial text-xl font-bold text-[#3E151E]">
                Your bag is empty
              </p>
              <p className="text-xs text-[#8C6D75] max-w-xs mx-auto leading-relaxed">
                Explore our fresh viennoiserie, artisanal coffees, and breakfast creations to add them here.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#3E151E] text-[#D5C2AE] text-xs uppercase tracking-widest font-semibold hover:bg-[#2B0D14] transition-all"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Order Type Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#EFE7DE] rounded-xl text-xs uppercase tracking-wider font-semibold">
                <button
                  onClick={() => setOrderType("dine-in")}
                  className={`py-2 rounded-lg transition-all ${
                    orderType === "dine-in"
                      ? "bg-[#3E151E] text-[#FAF7F2] shadow-sm"
                      : "text-[#6E2A37] hover:text-[#3E151E]"
                  }`}
                >
                  Dine-In (Sur Place)
                </button>
                <button
                  onClick={() => setOrderType("takeaway")}
                  className={`py-2 rounded-lg transition-all ${
                    orderType === "takeaway"
                      ? "bg-[#3E151E] text-[#FAF7F2] shadow-sm"
                      : "text-[#6E2A37] hover:text-[#3E151E]"
                  }`}
                >
                  Takeaway (À Emporter)
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 bg-white rounded-xl border border-[#D5C2AE]/50 flex items-center gap-3 shadow-sm"
                  >
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-[#EFE7DE] flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-editorial text-sm font-bold text-[#3E151E] truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#8C6D75] font-medium">
                        {item.price} DA each
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 bg-[#FAF7F2] border border-[#D5C2AE] rounded-lg px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-[#6E2A37] hover:text-[#3E151E]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-[#3E151E] w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-[#6E2A37] hover:text-[#3E151E]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Subtotal & Delete */}
                    <div className="text-right">
                      <span className="font-editorial text-sm font-bold text-[#3E151E] block">
                        {item.price * item.quantity} DA
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#8C6D75] hover:text-red-700 transition-colors mt-0.5"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra details input */}
              <div className="pt-2 space-y-3">
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#D5C2AE] text-xs text-[#2B0D14] focus:outline-none focus:border-[#3E151E]"
                />
                {orderType === "dine-in" && (
                  <input
                    type="text"
                    placeholder="Table Number (e.g. Table 4)"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#D5C2AE] text-xs text-[#2B0D14] focus:outline-none focus:border-[#3E151E]"
                  />
                )}
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {!orderPlaced && items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#D5C2AE]/50 space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#8C6D75]">
                <span>Items Subtotal:</span>
                <span>{totalAmount} DA</span>
              </div>
              <div className="flex justify-between text-[#8C6D75]">
                <span>Taxes & Service:</span>
                <span className="text-green-700 font-medium">Included</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#3E151E] pt-2 border-t border-[#D5C2AE]/30 font-editorial">
                <span>Total Payable:</span>
                <span>{totalAmount} DA</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={clearCart}
                className="px-4 py-3 rounded-full border border-[#D5C2AE] text-[#8C6D75] hover:text-[#3E151E] hover:border-[#3E151E] text-xs uppercase tracking-wider font-semibold transition-all"
              >
                Clear
              </button>

              <button
                onClick={handleCheckout}
                className="flex-1 py-3 px-6 rounded-full bg-[#3E151E] hover:bg-[#2B0D14] text-[#D5C2AE] hover:text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
              >
                <span>Confirm Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
