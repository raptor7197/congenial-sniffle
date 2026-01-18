import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[900px] flex flex-col justify-center px-[86px] pt-[100px] overflow-hidden">
       
      {/* Background vector top */}
       <div className="absolute top-[0.5px] left-[0.5px] w-full h-[33px] z-10">
         <Image src="/images/vector10.svg" alt="Decoration" fill className="object-cover" />
       </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col xl:flex-row items-center xl:items-start justify-between">
        
        {/* Left Content */}
        <div className="text-white font-space-grotesk font-bold relative z-20 mt-20">
            {/* The 10th block */}
            <div className="relative">
                <div className="flex items-baseline">
                    <span className="text-[150px] font-urbanist font-bold leading-none tracking-tighter">10</span>
                    <span className="text-[38px] ml-2 mb-auto mt-4">th</span>
                </div>
                
                <div className="text-[77px] leading-tight whitespace-nowrap">
                    <p>IEEE International</p>
                    <p>Test Conference</p>
                    <p>INDIA</p>
                </div>
            </div>

            {/* Subtitle - moved from AboutUs */}
            <h3 className="font-space-grotesk font-bold text-[26px] mt-8 max-w-[600px] leading-normal uppercase">
                An initiative towards India’s semiconductor ecosystem
            </h3>
        </div>

        {/* Right Content - Illustration */}
        <div className="relative w-full max-w-[800px] h-[600px] -mt-20 xl:mt-0 xl:-mr-20 pointer-events-none">
             {/* Isometric Illustration */}
            <div className="absolute inset-0">
               <Image 
                 src="/images/arduino.svg" 
                 alt="PCB Illustration" 
                 fill 
                 className="object-contain"
                 priority
               />
            </div>
        </div>
      </div>
      
      {/* Timer Section - Bottom Right */}
      <div className="absolute bottom-[0px] right-0 w-[809px] h-[130px] hidden xl:block z-30">
         {/* Background Shape */}
         <div className="absolute inset-0 z-0">
            <Image src="/images/vector20.svg" alt="Timer Background" fill className="object-cover" />
         </div>
         
         {/* Timer Content - Inside the div */}
         <div className="relative z-10 w-full h-full flex items-center justify-center gap-12 font-sarpanch text-white pb-4 pr-10">
              <div className="flex flex-col items-center">
                <span className="text-[60px] leading-none font-bold">6</span>
                <span className="text-[14px] tracking-wider">MONTHS</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[60px] leading-none font-bold">14</span>
                <span className="text-[14px] tracking-wider">DAYS</span>
              </div>
               <div className="flex flex-col items-center">
                <span className="text-[60px] leading-none font-bold">6</span>
                <span className="text-[14px] tracking-wider">HOURS</span>
              </div>
               <div className="flex flex-col items-center">
                <span className="text-[60px] leading-none font-bold">14</span>
                <span className="text-[14px] tracking-wider">MONTHS</span>
              </div>
         </div>
      </div>

      {/* Timer Section - Mobile */}
      <div className="xl:hidden w-full mt-10 flex flex-wrap justify-center gap-6 font-sarpanch text-white pb-10">
            <div className="flex flex-col items-center bg-white/10 rounded p-4 min-w-[100px]">
                <span className="text-[40px] leading-none font-bold">6</span>
                <span className="text-[12px] tracking-wider">MONTHS</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 rounded p-4 min-w-[100px]">
                <span className="text-[40px] leading-none font-bold">14</span>
                <span className="text-[12px] tracking-wider">DAYS</span>
            </div>
               <div className="flex flex-col items-center bg-white/10 rounded p-4 min-w-[100px]">
                <span className="text-[40px] leading-none font-bold">6</span>
                <span className="text-[12px] tracking-wider">HOURS</span>
            </div>
               <div className="flex flex-col items-center bg-white/10 rounded p-4 min-w-[100px]">
                <span className="text-[40px] leading-none font-bold">14</span>
                <span className="text-[12px] tracking-wider">MONTHS</span>
            </div>
      </div>

    </section>
  );
}
