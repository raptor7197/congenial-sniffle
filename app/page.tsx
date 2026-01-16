import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Photos from "@/components/Photos";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03396c] overflow-hidden relative">
      
      {/* Global Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
         {/* Background Pattern */}
         <div 
           className="absolute inset-0 opacity-10 bg-repeat"
           style={{ backgroundImage: `url('/images/homepage-bg.png')`, backgroundSize: '80px 80px' }}
         />
         
         {/* Vertical Grid Lines */}
         <div className="absolute top-[109px] left-[5%] h-full w-[1px] hidden xl:block">
            <Image src="/images/line5.svg" alt="Grid Line" width={1} height={5000} className="h-full object-cover" />
         </div>
         <div className="absolute top-[109px] right-[5%] h-full w-[1px] hidden xl:block">
            <Image src="/images/line4.svg" alt="Grid Line" width={1} height={5000} className="h-full object-cover" />
         </div>
      </div>

      <Navbar />
      
      <div className="relative z-10 flex flex-col gap-0">
        <Hero />
        <AboutUs />
        <Timeline />
        <Testimonials />
        <FAQ />
        <Photos />
        <Footer />
      </div>

    </main>
  );
}
