import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PROGRAM", href: "/program" },
  { name: "COMMITEE", href: "/commitee" },
  { name: "AUTHORS", href: "/authors" },
  { name: "HACKATHON", href: "/hackathon" },
  { name: "SPONSORS", href: "/sponsors" },
];

export default function Navbar() {
  return (
    <nav className="absolute top-[34px] left-1/2 -translate-x-1/2 w-full max-w-[1360px] h-[68px] border border-white flex items-center justify-between px-10 z-50 bg-black/10 backdrop-blur-sm">
      <div className="relative w-[131px] h-[38px]">
        <Image
          src="/images/ieee-logo.svg"
          alt="IEEE Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="flex gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-poppins font-bold text-[20px] text-white hover:text-gray-300 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
