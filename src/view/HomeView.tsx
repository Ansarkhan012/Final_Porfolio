

export const HomeView = () => {
  return (
    <section className="relative max-w-[1200px] flex flex-col items-center mx-auto w-full h-dvh px-6 py-8 md:px-12 md:py-10 overflow-hidden">
      

      <div className="flex flex-col items-center justify-center text-center z-10 max-w-4xl mx-auto my-10">
        
        
        <h1 className="text-[12vw] md:text-[6rem] font-bold uppercase tracking-tighter leading-[0.85] mb-6">
          Ditching form <br className="hidden md:block" /> 
          is a <span className="text-gray-400">mistake</span>
        </h1>

        
        <p className="max-w-lg text-sm md:text-lg font-medium uppercase leading-relaxed text-neutral-500 tracking-wide ">
          Frontend that makes design and functionality flow—beautiful UI, effortless UX, everything just works.
        </p>

        
      </div>

    
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end text-xs md:text-sm font-semibold uppercase tracking-widest text-neutral-400 my-5 gap-4 md:gap-0">
        
        
        <p >
          Based in <span className="text-black ">Karachi, Pakistan</span>
        </p>

       
        <p className="group">
          <span className="text-black group-hover:underline   transition-all">Ansar Khan</span> — Frontend Developer
        </p>
      </div>

    </section>
  );
};