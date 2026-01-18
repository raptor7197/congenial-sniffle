import Image from "next/image";

export default function FAQ() {
  return (
    <section className="relative w-full py-20 px-[89px] text-white">
      <h2 className="font-angkor text-[60px] leading-tight mb-16">
        FREQUENTLY <span className="text-[#6aaff1]">ASKED QUESTIONS</span>
      </h2>

      <div className="flex flex-col xl:flex-row gap-20">
        
        {/* Left Column: Contact / Form */}
        <div className="flex-1 flex flex-col gap-10">
           {/* Placeholder Text */}
           <div className="font-poppins font-medium text-[30px] text-black bg-white/50 p-4 rounded backdrop-blur-sm break-all">
             loejdfhbklnskxdcfvgjhbnsdxfcghbjnkmszxdfcg
             zdxfcvbnmzsdxfcgvbhnmszdxfcgvhbjnmxdfcv
             szdxfcgvhbjn.
           </div>

           {/* Contact Box */}
           <div className="bg-white rounded-[5px] p-8 text-black min-h-[456px] relative">
              <h3 className="font-poppins font-semibold text-[30px] mt-4 mb-2">Still have Questions?</h3>
              <p className="font-poppins text-[22px] mb-8">Contact Us.</p>

              {/* Form */}
              <form className="flex flex-col gap-4 mt-8">
                 <div className="relative">
                   <input 
                     type="text" 
                     placeholder="Name*" 
                     className="w-full h-[44px] bg-[#e0e0e0] rounded-[40px] px-6 text-[22px] font-poppins placeholder-black"
                   />
                 </div>
                  <div className="relative">
                   <input 
                     type="email" 
                     placeholder="Email ID*" 
                     className="w-full h-[44px] bg-[#e0e0e0] rounded-[40px] px-6 text-[22px] font-poppins placeholder-black"
                   />
                 </div>
                 <div className="relative flex gap-4">
                   <input 
                     type="text" 
                     placeholder="Querie*" 
                     className="flex-1 h-[44px] bg-[#e0e0e0] rounded-[40px] px-6 text-[22px] font-poppins placeholder-black"
                   />
                   <button 
                     type="submit"
                     className="w-[200px] h-[44px] bg-[#444] text-white rounded-[40px] text-[22px] font-poppins" 
                   >
                     Submit
                   </button>
                 </div>
              </form>
           </div>
        </div>

        {/* Right Column: FAQs */}
        <div className="flex-1 flex flex-col gap-6">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="bg-[#d9d9d9] rounded-[5px] p-6 text-black min-h-[211px]">
               <h3 className="font-poppins font-semibold text-[30px] mb-2">How to join?</h3>
               <div className="font-poppins text-[22px]">
                 <p>loremjhebgjhdsbkjdvkjdkvhbjdhj</p>
                 <p>hesbdjcsudyub</p>
               </div>
             </div>
           ))}
        </div>
      </div>

       {/* Separator */}
       <div className="relative w-full h-[123px] my-20">
          <div className="absolute inset-0 w-full h-full rotate-180 scale-y-[-1]">
             <Image src="/images/vector11.svg" alt="Separator" fill className="object-contain" />
          </div>
       </div>
    </section>
  );
}
