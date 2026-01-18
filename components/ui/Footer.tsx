import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-10 px-[86px] text-white">
      
      {/* Newsletter Section */}
      <div className="relative w-full max-w-[1027px] mx-auto h-[191px] bg-[#fcfcfc] rounded mb-20 flex items-center px-10">
         <div className="flex-1">
            <h3 className="font-roboto-slab font-semibold text-[40px] text-[#022241]">
               Subscribe to our <br/> Newsletter
            </h3>
         </div>
         
         <div className="relative">
             {/* Decorator pill? */}
             {/* Actual input field logic inspired by design */}
             <div className="flex items-center gap-4">
               <input 
                 type="email" 
                 placeholder="Email Address" 
                 className="w-[323px] h-[38px] rounded-[40px] px-4 bg-[#011f4b] text-white placeholder-white/50 border-none outline-none"
               />
               <button className="w-[136px] h-[38px] bg-white text-black rounded-[40px] font-poppins text-[22px] shadow-sm flex items-center justify-center">
                 Subscribe
               </button>
             </div>
         </div>
      </div>

      {/* Footer Links Grid */}
      <div className="flex flex-col xl:flex-row justify-between gap-10 border-t border-white/20 pt-10 relative">
          
          {/* Email */}
          <div>
            <h4 className="font-inter text-[20px] mb-4">Email ID</h4>
            <a href="mailto:info@itctestweekindia.org" className="opacity-80 hover:opacity-100">info@itctestweekindia.org</a>
          </div>

          {/* Submissions */}
          <div className="font-poppins text-[22px]">
             <h4 className="mb-4">Submissions</h4>
             <ul className="space-y-2">
               <li><Link href="https://itctestweekindia.org/CFP" className="underline decoration-solid">Call for Papers</Link></li>
             </ul>
          </div>

           {/* Conference */}
          <div className="font-poppins text-[22px]">
             <h4 className="mb-4">Conference</h4>
             <ul className="space-y-2">
               <li><Link href="https://itctestweekindia.org/" className="underline decoration-solid">About Us</Link></li>
               <li><Link href="https://itctestweekindia.org/" className="underline decoration-solid">Privacy Policy</Link></li>
               <li><Link href="https://itctestweekindia.org/" className="underline decoration-solid">Refund Policy</Link></li>
               <li><Link href="https://itctestweekindia.org/" className="underline decoration-solid">Terms & Conditions</Link></li>
               <li><Link href="https://itctestweekindia.org/contactus" className="underline decoration-solid">Contact Us</Link></li>
             </ul>
          </div>

           {/* Location */}
          <div className="font-poppins text-[22px]">
             <h4 className="mb-4">Conference Location</h4>
             <Link href="https://maps.app.goo.gl/Su9eU1hLBaaRZcKEA" className="underline decoration-solid">
               Radisson Blu, Bengaluru
             </Link>
          </div>
      </div>
      
       {/* Divider Line */}
       <div className="w-full h-px bg-white/50 my-10 relative">
           <Image src="/images/vector17.svg" alt="line" fill className="object-cover" />
       </div>

      <div className="text-center font-poppins text-[22px]">
        2026 © ITC Test Week India | All rights reserved
      </div>
    </footer>
  );
}
