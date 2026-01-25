import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // 1. Initial Center Alignment
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    // 2. Optimization: quickTo use karein taaki mouse lag na kare
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
     
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as HTMLElement;
      
      const isTextHover = target.closest("Link, button, [data-cursor='hover']");

      if (isTextHover) {
        if (!isHoveringRef.current) {
          isHoveringRef.current = true;
          // Hover State: Bada hona aur transparent hona
          gsap.to(cursor, {
            scale: 2,
            mixBlendMode: "difference", 
            duration: 0.25,
            ease: "power2.out",
          });
        }
      } else {
        if (isHoveringRef.current) {
          isHoveringRef.current = false;
          
          gsap.to(cursor, {
            scale: 1,
            backgroundColor: "white", 
            border: "none",
            mixBlendMode: "difference",
            duration: 0.25,
            ease: "power2.out",
          });
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      
      gsap.killTweensOf(cursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0
        w-6 h-6
        bg-white
        rounded-full
        pointer-events-none
        z-[9999]
        mix-blend-difference
      "
    />
  );
};

export default CustomCursor;