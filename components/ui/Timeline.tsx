import Image from "next/image";

export default function Timeline() {
  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center">
      <h2 className="font-space-grotesk font-bold text-[64px] text-white mb-20">
        TIMELINE
      </h2>
      
      <div className="relative w-full max-w-[1360px] flex flex-col items-center gap-10">
        
        {/* Background Line/Path */}
        <div className="absolute top-[120px] left-0 w-full h-[520px] w-[1359px] z-0 pointer-events-none opacity-50">
             <Image src="/images/vector12.svg" alt="Timeline Path" fill className="object-contain" />
        </div>

        {/* Day 1 */}
        <div className="relative z-10 w-full flex justify-center items-center">
             <div className="relative w-full max-w-[525px] aspect-[525/175] h-auto">
                <Image src="/images/timeline-card1.svg" alt="Day 1 Event" fill className="object-contain" />
             </div>
             <div className="absolute left-[10%] sm:left-[20%] text-white font-roboto-slab font-extrabold text-[24px] sm:text-[40px]">
                DAY 1
             </div>
        </div>

        {/* Day 2 - Flipped image visually or just positioned? Design says rotated 180deg. */}
        <div className="relative z-10 w-full flex justify-center items-center">
             <div className="relative w-full max-w-[525px] aspect-[525/175] h-auto rotate-180">
                <Image src="/images/timeline-card2.svg" alt="Day 2 Event" fill className="object-contain" />
             </div>
             <div className="absolute right-[10%] sm:right-[20%] text-white font-roboto-slab font-extrabold text-[24px] sm:text-[40px]">
                DAY 2
             </div>
        </div>

        {/* Day 3 */}
        <div className="relative z-10 w-full flex justify-center items-center">
             <div className="relative w-full max-w-[525px] aspect-[525/175] h-auto">
                <Image src="/images/timeline-card3.svg" alt="Day 3 Event" fill className="object-contain" />
             </div>
             <div className="absolute left-[10%] sm:left-[20%] text-white font-roboto-slab font-extrabold text-[24px] sm:text-[40px]">
                DAY 3
             </div>
        </div>

      </div>
      
       {/* Separator */}
       <div className="relative w-full h-[123px] my-10">
          <div className="absolute inset-0 w-full h-full rotate-180 scale-y-[-1]">
             <Image src="/images/vector11.svg" alt="Separator" fill className="object-contain" />
          </div>
       </div>

    </section>
  );
}
