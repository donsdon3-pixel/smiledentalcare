"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { cn } from "@/utils/cn";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-8 right-8 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-clinic-blue-600 text-white shadow-lg transition-all hover:bg-clinic-blue-700 focus:outline-none focus:ring-2 focus:ring-clinic-blue-300",
        !isVisible && "pointer-events-none opacity-0"
      )}
    >
      <FaArrowUp className="h-5 w-5" />
    </button>
  );
}
