"use client";

import React, { useEffect } from "react";

export function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    const observeAll = () => {
      const targets = document.querySelectorAll(
        ".animate-left, .animate-right, .animate-top, .animate-bottom, .animate-scale, .animate-fade"
      );
      targets.forEach((el) => {
        // If element is already in viewport, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-revealed");
        }
        observer.observe(el);
      });
    };

    observeAll();

    // Observe dynamic DOM changes (e.g. when category filter changes)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}
