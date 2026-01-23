'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PROGRAM", href: "/program" },
  { name: "COMMITEE", href: "/commitee" },
  { name: "AUTHORS", href: "/authors" },
  { name: "CFP", href: "/cfp" },
  { name: "CFT", href: "/cft" },
  { name: "ART", href: "/art" },
  { name: "HACKATHON", href: "/hackathon" },
  { name: "FELLOWSHIP", href: "/fellowship" },
  { name: "SPONSORS", href: "/sponsors" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="absolute top-[0.6%] left-[2.25%] right-[2.25%] h-[68px] border-[2px] border-white items-center justify-start px-4 xl:px-10 z-50 bg-transparent hidden xl:flex">
        <div className="relative w-[131px] h-[38px]">
          <Link href="/">
            <Image
              src="/images/ieee-logo.svg"
              alt="IEEE Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <div className="flex gap-6 xl:gap-10 ml-12 xl:ml-24">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-poppins font-bold text-[16px] xl:text-[20px] text-white hover:text-gray-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-[56px] sm:h-[60px] xl:hidden border-b-[2px] border-white flex items-center justify-between px-3 sm:px-4 z-50 bg-[#03396c] backdrop-blur-sm">
        <div className="relative w-[90px] h-[28px] sm:w-[100px] sm:h-[30px]">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/images/ieee-logo.svg"
              alt="IEEE Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[56px] sm:top-[60px] left-0 right-0 bg-[#03396c] border-b-[2px] border-white z-40 xl:hidden shadow-lg animate-slideDown">
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-poppins font-bold text-[16px] sm:text-[18px] text-white hover:bg-white/10 active:bg-white/20 transition-colors px-4 py-3.5 sm:py-4 border-b border-white/20 min-h-[48px] flex items-center touch-manipulation"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
