import React from "react";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`
        relative inline-flex items-center justify-center gap-2 px-10 py-3 
        overflow-hidden font-medium text-black border border-[#4f4f4f] rounded-none 
        transition-all duration-200 ease-in z-10 group cursor-pointer
        hover:text-white hover:border-black
        ${className}
      `}
      {...props}
    >
      
      <span className="absolute left-1/2 top-full -translate-x-1/2 w-[140%] h-[180%] rounded-[50%] bg-black/5 -z-10 block transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] group-hover:-top-[35%] group-hover:scale-y-125 group-hover:scale-x-75"></span>

      {/* Circle 2: Main Green layer (#39bda7) */}
      <span className="absolute left-[55%] top-[180%] -translate-x-1/2 w-[160%] h-[190%] rounded-[50%] bg-black -z-10 block transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] delay-100 group-hover:-top-[45%] group-hover:scale-y-125 group-hover:scale-x-75"></span>

      
      <span className="relative z-10">{children}</span>

      {/* Arrow Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </button>
  );
};

export default AnimatedButton;