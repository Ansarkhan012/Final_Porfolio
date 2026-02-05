import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null); // Text aur Icon ke liye ref
  const isHoveringRef = useRef<string | null>(null); // Track current state

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorText = textRef.current;
    
    if (!cursor || !cursorText) return;

    // 1. Initial Setup
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // 2. Movement Optimization
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as HTMLElement;

      // Check specific hover targets
      const isProjectHover = target.closest("[data-cursor='project']");
      const isLinkHover = target.closest("a, button, [data-cursor='hover']");

      // --- STATE 1: VIEW PROJECT (Pill Shape) ---
      if (isProjectHover) {
        if (isHoveringRef.current !== "project") {
          isHoveringRef.current = "project";
          
          // Cursor Shape Change
          gsap.to(cursor, {
            width: "180px",       // Button ki width
            height: "56px",       // Button ki height
            borderRadius: "9999px",
            backgroundColor: "#111827", // Dark Grey/Black bg (Tailwind gray-900)
            mixBlendMode: "normal", // Normal mode taaki button clear dikhe
            border: "1px solid rgba(255,255,255,0.2)",
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)", // Thoda bouncy effect
          });

          // Text Reveal
          gsap.to(cursorText, {
            opacity: 1,
            scale: 1,
            duration: 0.2,
            delay: 0.1,
          });
        }
      } 
      // --- STATE 2: SIMPLE LINK HOVER (Big Circle) ---
      else if (isLinkHover) {
        if (isHoveringRef.current !== "link") {
          isHoveringRef.current = "link";

          gsap.to(cursor, {
            width: "24px", 
            height: "24px",
            scale: 2.5,
            backgroundColor: "white",
            mixBlendMode: "difference",
            border: "none",
            borderRadius: "50%",
            duration: 0.25,
            ease: "power2.out",
          });

          // Hide Text
          gsap.to(cursorText, { opacity: 0, scale: 0.5, duration: 0.1 });
        }
      } 
      // --- STATE 3: DEFAULT (Small Dot) ---
      else {
        if (isHoveringRef.current !== null) {
          isHoveringRef.current = null;

          gsap.to(cursor, {
            width: "24px",
            height: "24px",
            scale: 1,
            backgroundColor: "white",
            mixBlendMode: "difference",
            border: "none",
            borderRadius: "50%",
            duration: 0.25,
            ease: "power2.out",
          });

          // Hide Text
          gsap.to(cursorText, { opacity: 0, scale: 0.5, duration: 0.1 });
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      gsap.killTweensOf([cursor, cursorText]);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
    >
      {/* Ye text aur icon sirf tab dikhega jab project section pe hover hoga */}
      <div 
        ref={textRef} 
        className="opacity-0 flex items-center gap-2 text-white text-sm font-bold tracking-wider whitespace-nowrap px-4"
      >
        <span>VIEW PROJECT</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;