import Image from "next/image";

export default function Photos() {
  return (
    <section className="relative w-full py-20 px-[86px] flex flex-col items-center">
      <h2 className="font-angkor text-[60px] text-white mb-16">
        PHOTOS SECTION
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-[361px] h-[267px] bg-[#d9d9d9] rounded-lg">
             {/* Placeholder for Photo */}
          </div>
        ))}
      </div>

       {/* Separator - vector11 again? In design there is one at 5140px. */}
        <div className="relative w-full h-[123px] my-20">
          <div className="absolute inset-0 w-full h-full rotate-180 scale-y-[-1]">
             <Image src="/images/vector11.svg" alt="Separator" fill className="object-contain" />
          </div>
       </div>

    </section>
  );
}
