import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Committee() {
    return (
        <main className="min-h-screen bg-[#03396c] overflow-hidden relative text-white font-poppins selection:bg-white/20">

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

            <div className="relative z-10 pt-[150px] pb-20 px-4 md:px-10 max-w-[1360px] mx-auto flex flex-col items-center">

                {/* Title */}
                <h1 className="text-4xl md:text-[64px] font-bold text-center mb-16 tracking-tight">
                    MEET THE COMMITEE
                </h1>

                {/* Section 1: General Chairs */}
                <div className="w-full flex flex-col items-center mb-32 relative">
                    <h2 className="text-3xl md:text-[48px] font-bold mb-12">
                        GENERAL CHAIRS
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-24">
                        {/* Card 1 */}
                        <div className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] border border-white/20 rounded-lg p-6 flex flex-col items-center justify-center bg-[#03396c]/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:border-white/40 transition-all group">
                            {/* Image Placeholder area could go here if needed, but per design it's text focused or placeholder for person */}
                            <div className="text-center mt-auto mb-auto">
                                <h3 className="text-lg font-bold mb-1">Dr. Sivanantham S</h3>
                                <p className="text-sm text-gray-300 mb-4">Designation</p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    loremipsum loremipsum <br />
                                    loremipsum loremipsum <br />
                                    loremipsum loremipsum
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] border border-white/20 rounded-lg p-6 flex flex-col items-center justify-center bg-[#03396c]/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:border-white/40 transition-all">
                            <div className="text-center mt-auto mb-auto">
                                <h3 className="text-lg font-bold mb-1">Dr. Sivanantham S</h3>
                                <p className="text-sm text-gray-300 mb-4">Designation</p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    loremipsum loremipsum <br />
                                    loremipsum loremipsum <br />
                                    loremipsum loremipsum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dashed Line Separator (Decorative) */}
                <div className="absolute top-[650px] left-0 w-full h-[1px] hidden xl:block opacity-30 pointer-events-none">
                    <svg width="100%" height="200" className="overflow-visible">
                        <path d="M 0,0 L 400,0 L 550,150 L 1400,150" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                    </svg>
                </div>


                {/* Section 2: Registration */}
                <div className="w-full relative">
                    <h2 className="text-3xl md:text-[56px] font-bold mb-12 text-left md:ml-10">
                        REGISTRATION
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        {/* Card 1 */}
                        <div className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] border border-white/20 rounded-lg p-6 flex flex-col items-center justify-center bg-[#03396c]/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                            <div className="text-center mt-auto mb-auto">
                                <h3 className="text-lg font-bold mb-1">Dr. Sivanantham S</h3>
                                <p className="text-sm text-gray-300 mb-4">Designation</p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    loremipsum loremipsum <br />
                                    loremipsum loremipsum <br />
                                    loremipsum loremipsum
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] border border-white/20 rounded-lg p-6 flex flex-col items-center justify-center bg-[#03396c]/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                            <div className="text-center mt-auto mb-auto">
                                <h3 className="text-lg font-bold mb-1">Dr. Sivanantham S</h3>
                                <p className="text-sm text-gray-300 mb-4">Designation</p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    loremipsum loremipsum <br />
                                    loremipsum loremipsum <br />
                                    loremipsum loremipsum
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] border border-white/20 rounded-lg p-6 flex flex-col items-center justify-center bg-[#03396c]/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                            <div className="text-center mt-auto mb-auto">
                                <h3 className="text-lg font-bold mb-1">Dr. Sivanantham S</h3>
                                <p className="text-sm text-gray-300 mb-4">Designation</p>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    loremipsum loremipsum <br />
                                    loremipsum loremipsum <br />
                                    loremipsum loremipsum
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Bottom decorative dashed line */}
                    <div className="absolute -bottom-20 left-0 w-full h-[1px] hidden xl:block opacity-30 pointer-events-none">
                        <svg width="100%" height="200" className="overflow-visible">
                            <path d="M 0,200 L 700,200 L 850,50 L 1400,50" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                        </svg>
                    </div>
                </div>

            </div>
        </main>
    );
}
