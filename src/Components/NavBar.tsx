import { useEffect, useState, useRef } from "react";
import AnimatedButton from "./ui/AnimatedButton";
import { X, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function NavBar() {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  /* ---------------- TIME ---------------- */
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Karachi",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- GSAP MENU ---------------- */
 useGSAP(
  () => {
    // 🔹 Initial state (ONLY ONCE)
    gsap.set(menuRef.current, { y: "100%" });
  },
  { dependencies: [] }
);

useGSAP(
  () => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        y: "0%",
        duration: 0.8,
        ease: "power4.inOut",
      });

      gsap.fromTo(
        ".menu-text-reveal",
        { y: "120%" },
        {
          y: "0%",
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.3,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "100%",
        duration: 0.8,
        ease: "power4.inOut",
      });
    }
  },
  { dependencies: [isMenuOpen] }
);

  return (
    <>
      {/* ---------------- NAVBAR ---------------- */}
      <nav className="max-w-[1200px] mx-auto flex p-5 justify-between items-center relative z-50 mix-blend-difference">
        {/* Time */}
        <div className="text-sm font-semibold tracking-wider text-blue-700 uppercase w-[150px]">
          <span className="opacity-60">Local</span> {time}
        </div>

        {/* Desktop Trigger */}
        <div
          onClick={() => setIsMenuOpen(true)}
          className="hidden md:grid grid-cols-2 gap-1 cursor-pointer hover:scale-110 transition-transform"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="w-1 h-1 bg-current rounded-full" />
          ))}
        </div>

        {/* Mobile Trigger */}
        <div
          onClick={() => setIsMenuOpen(true)}
          className="grid md:hidden grid-cols-2 gap-1 cursor-pointer"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="w-1 h-1 bg-current rounded-full" />
          ))}
        </div>

        <AnimatedButton>LET'S TALK</AnimatedButton>
      </nav>

      {/* ---------------- OVERLAY MENU ---------------- */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-[#F4F4F4]  z-40 flex flex-col justify-between px-4 py-8 md:p-10 will-change-transform"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 left-1/2 -translate-x-1/2 z-50 bg-[#1a1a1a] text-white rounded-full p-3 hover:scale-110 transition-transform"
        >
          <X size={24} />
        </button>

        {/* Links */}
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-center group/menu">
            {["HOME", "WORK", "ABOUT ME", "CONTACT"].map((item, index) => (
              <div key={index} className="overflow-hidden relative">
                <a
                  href="#"
                  className="
                    menu-text-reveal
                    block relative
                    
                    font-bold uppercase
                    text-[14vw] md:text-[120px]
                    leading-[0.8] md:leading-[90px]
                    tracking-tighter
                    text-[#1a1a1a]
                    transition-all duration-500 ease-out
                    hover:text-neutral-500
                    hover:translate-x-4
                    hover/menu:opacity-30
                    hover:!opacity-100
                  "
                >
                  {item}
                  <span className="absolute text-sm tracking-normal font-medium top-1/2 -left-6 -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity">
                    (0{index + 1})
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between text-[#1a1a1a] text-xs md:text-sm font-bold uppercase tracking-wide">
          <span>©2024 All Rights Reserved</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            {["Instagram", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="flex items-center gap-1 hover:underline underline-offset-4"
              >
                {social} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
