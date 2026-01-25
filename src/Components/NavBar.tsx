import { useEffect, useState } from "react";
import AnimatedButton from "./ui/AnimatedButton"


function NavBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, 
        timeZone: "Asia/Karachi", 
      });
      setTime(timeString);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
  <>
  <nav className="max-w-[1200px] mx-auto flex p-5 justify-between items-center">
    <div className="text-sm font-semibold tracking-wider uppercase w-[150px]">
          <span className="text-neutral-500">Local</span> {time}
        </div>
    <div className="hidden md:grid grid-cols-2 gap-1 cursor-pointer hover:scale-110 transition-transform">
           <span className="w-1 h-1 bg-black rounded-full"></span>
           <span className="w-1 h-1 bg-black rounded-full"></span>
           <span className="w-1 h-1 bg-black rounded-full"></span>
           <span className="w-1 h-1 bg-black rounded-full"></span>
        </div>
    <AnimatedButton onClick={() => console.log("Clicked!")}>
       LET'S TAAK
    </AnimatedButton>
  </nav>
  </>
  )
}

export default NavBar