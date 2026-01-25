// Components/CustomCursor.tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  // Cursor element ka ref
  const cursorRef = useRef<HTMLDivElement>(null);
  // State track karne ke liye ref (re-render se bachne ke liye)
  const isHoveringRef = useRef(false);

  useEffect(() => {
    // Make sure cursor element exists
    if (!cursorRef.current) return;

    // --- GSAP Initial Setup ---
    // Cursor ko center karne ke liye initial offset set karte hain
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      // 1. Movement Animation (Smooth follow)
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3, // Jitna bara number, utna zyada "lag" ya smooth hoga
        ease: "power2.out",
        overwrite: "auto" // Performance optimization
      });

      // 2. Hover Detection Logic
      const target = e.target as HTMLElement;
      
      // Check karein ke jis cheez par mouse hai wo link, button, ya specific class hai?
      // `closest` function parent elements ko bhi check karta hai.
      const isActionable = target.closest('a, button, input, textarea, .hover-target');

      // Scenario A: Mouse abhi actionable cheez par aya hai (Enter)
      if (isActionable && !isHoveringRef.current) {
        isHoveringRef.current = true; // Flag update
        gsap.to(cursorRef.current, {
            opacity: 0, // Transparent ho jaye
            scale: 0.3, // Thora chota ho kar gayab ho (optional cool effect)
            duration: 0.2
        });
      }
      // Scenario B: Mouse abhi actionable cheez se hat gaya hai (Leave)
      else if (!isActionable && isHoveringRef.current) {
        isHoveringRef.current = false; // Flag update
        gsap.to(cursorRef.current, {
            opacity: 1, // Wapis nazar aaye
            scale: 1, // Wapis normal size
            duration: 0.2
        });
      }
    };

    // Window par listener lagaya
    window.addEventListener('mousemove', moveCursor);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      // GSAP animations ko kill karna achi practice hai unmount par
      gsap.killTweensOf(cursorRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor" // Styling hum CSS file mein karenge
    />
  );
};

export default CustomCursor;