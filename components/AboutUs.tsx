import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative w-full py-20 px-[86px] text-white">
      
      <div className="flex flex-col xl:flex-row gap-16">
        <div className="flex-1">
          <h2 className="font-space-grotesk font-bold text-[70px] leading-tight mb-4">
            ABOUT US
          </h2>
          <h3 className="font-space-grotesk font-bold text-[48px] mb-8">
            Welcome to ITC INDIA 2026
          </h3>
          
          <div className="font-poppins text-[18px] text-white/90 space-y-6 max-w-[600px]">
            <p>
              Lorem ipsum dolor sit amet consectetur. Felis quis in molestie curabitur bibendum. 
              Amet in arcu laoreet arcu risus hendrerit odio senectus sapien. Blandit sit at sagittis auctor est.
            </p>
            <p>
              Purus ut odio integer ac vel. Amet vitae sit volutpat quam pretium. Faucibus adipiscing magna massa egestas in quis scelerisque nibh nibh.
              Lorem ipsum dolor sit amet consectetur. Felis quis in molestie curabitur bibendum.
            </p>
            <p>
              Purus ut odio integer ac vel. Amet vitae sit volutpat quam pretium. Faucibus adipiscing magna massa egestas in quis scelerisque nibh nibh.
            </p>
          </div>
        </div>

        <div className="flex-1 relative">
           
           {/* Carousel Image */}
           <div className="relative w-full h-[503px] rounded-lg overflow-hidden border border-white/20">
              <Image 
                src="/images/carasol1.png" 
                alt="Highlights" 
                fill 
                className="object-cover"
              />
           </div>
        </div>
      </div>
        
         {/* Vector 9 Decoration */}
        <div className="absolute left-[41px] top-[0] w-[1355px] h-[123px] pointer-events-none -z-10">
            <Image src="/images/vector9.svg" alt="Line" fill className="object-contain" />
        </div>
    </section>
  );
}
