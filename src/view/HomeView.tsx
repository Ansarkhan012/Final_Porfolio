

export const HomeView = () => {
  return (
    <>
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
    <section className="relative w-screen h-screen overflow-hidden font-sans "
    data-cursor="project">
      {/* Main Background Image */}
      {/* We use the provided image as the background source since it contains the phone */}
      <img
        src="/project1.jpg" // Make sure this path is correct in your project
        alt="Obvious Wallet Project Background"
        className="absolute left-28 inset-0 w-[80%] h-full  object-center z-0 opacity-90"
      />

      {/* Content Overlay Container */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl lg:text-[9rem] font-black text-white leading-none tracking-tighter uppercase drop-shadow-lg">
              OBVIOUS WALLET
            </h1>
            
            {/* Subtitle */}
            <p className="mt-8 text-2xl md:text-3xl text-gray-200 font-medium max-w-xl leading-tight drop-shadow-md">
              An account abstraction based <br className="hidden md:block" />
              Crypto wallet app
            </p>
          </div>
        </div>
      </div>

      </section>

      
<section className="w-screen h-screen my-5">
  <img
    src="/project1.jpg"
    alt="Project 1"
    className="w-full h-full object-cover"
  />
</section>
<section className="w-screen h-screen my-5">
  <img
    src="/project1.jpg"
    alt="Project 1"
    className="w-full h-full object-cover"
  />
</section>
    </>
  );
};