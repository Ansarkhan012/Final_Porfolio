export const HomeView = () => {
  return (
    <>
      
      <section className="mx-auto max-w-[1200px] flex h-screen   flex-col items-center justify-center text-center">
        
        
        <div className="flex flex-col max-w-[700px] items-center justify-center my-20">
          <h1 className="pb-[20px] text-[3rem] font-bold uppercase tracking-[-2px] leading-[1.1] md:text-[5.6rem] md:tracking-[-4px] md:leading-[0.8]">
            Ditching form is a mistake
          </h1>
          
          <p className="px-[20px] text-[1rem] font-semibold uppercase leading-[1.4] text-[#525252] md:text-[1.2rem] md:leading-[0.9]">
            Frontend that makes design and functionality flow—beautiful UI, effortless UX, everything just works.
          </p>
        </div>

        
        <div className="mt-10 flex w-full p-10  flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <p className="text-[1rem] font-semibold uppercase text-[#686868]">
            base in <span className="text-[1.1rem] text-black">karachi, pakistan</span>
          </p>
          <p className="text-[1rem] font-semibold uppercase text-[#686868]">
            <span className="text-[1.1rem] text-black">Ansar Khan</span> | Frontend Developer
          </p>
        </div>
        
      </section>
    </>
  );
};