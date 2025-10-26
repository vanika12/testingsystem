"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pagesToScrollTop = ["/about-us", "/find-journal", "/support"];

    if (pagesToScrollTop.some((path) => pathname.startsWith(path))) {
      // Scroll inside the .main-content container instead of window
      const mainContent = document.querySelector(".main-content");

      if (mainContent) {
        // Scroll instantly to top
        mainContent.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });

        // Force scroll again after rendering finishes (handles async content)
        setTimeout(() => {
          mainContent.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          });
        }, 100);
      } else {
        // fallback in case .main-content not found
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
