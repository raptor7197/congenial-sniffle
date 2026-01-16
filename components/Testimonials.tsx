import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="relative w-full py-20 flex flex-col items-center">
      <h2 className="font-angkor text-[75px] text-white mb-20">
        TESTIMONIALS
      </h2>

      <div className="flex flex-col md:flex-row gap-10 justify-center w-full max-w-[1400px]">
        {/* Testimonial 1 */}
        <div className="relative w-full max-w-[548px] min-h-[293px] bg-[#d9d9d9] rounded-sm p-6 sm:p-10 shadow-lg">
           <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-[50px] sm:w-[66px] h-[50px] sm:h-[66px] rounded-full overflow-hidden">
             <Image src="/images/ellipse13.svg" alt="Avatar" fill className="object-cover" />
           </div>
           
           <div className="ml-[70px] sm:ml-[90px] mb-6">
             <h4 className="font-poppins text-[18px] sm:text-[24px] text-black leading-none mb-2">Full name</h4>
             <p className="font-poppins text-[18px] sm:text-[24px] text-black leading-none">Company Name</p>
           </div>
           
           <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-[24px] sm:w-[30px] h-[18px] sm:h-[22px]">
              <Image src="/images/vector.svg" alt="Quote" fill className="object-contain" />
           </div>

           <div className="font-poppins text-[18px] sm:text-[24px] text-black mt-8">
             <p>loremjhebgjhdsbkjdvkjdkvhbjdhj</p>
             <p>hesbdjcsudyub</p>
             <p>sdbjhbdjhyvhsd</p>
           </div>
        </div>

        {/* Testimonial 2 */}
        <div className="relative w-full max-w-[548px] min-h-[293px] bg-[#d9d9d9] rounded-sm p-6 sm:p-10 shadow-lg">
           <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-[50px] sm:w-[66px] h-[50px] sm:h-[66px] rounded-full overflow-hidden">
             <Image src="/images/ellipse13.svg" alt="Avatar" fill className="object-cover" />
           </div>
           
           <div className="ml-[70px] sm:ml-[90px] mb-6">
             <h4 className="font-poppins text-[18px] sm:text-[24px] text-black leading-none mb-2">Full name</h4>
             <p className="font-poppins text-[18px] sm:text-[24px] text-black leading-none">Company Name</p>
           </div>
           
           <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-[24px] sm:w-[30px] h-[18px] sm:h-[22px]">
              <Image src="/images/vector.svg" alt="Quote" fill className="object-contain" />
           </div>

           <div className="font-poppins text-[18px] sm:text-[24px] text-black mt-8">
             <p>loremjhebgjhdsbkjdvkjdkvhbjdhj</p>
             <p>hesbdjcsudyub</p>
             <p>sdbjhbdjhyvhsd</p>
           </div>
        </div>
      </div>

       {/* Decorators */}
       <div className="absolute w-full flex justify-between px-20 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="relative w-[25px] h-[60px] rotate-180">
            <Image src="/images/vector8.svg" alt="Decoration" fill className="object-contain" />
          </div>
           <div className="relative w-[25px] h-[60px]">
            <Image src="/images/vector7.svg" alt="Decoration" fill className="object-contain" />
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
