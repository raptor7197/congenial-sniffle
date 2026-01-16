import type { Metadata } from "next";
import { 
  Space_Grotesk, 
  Urbanist, 
  Poppins, 
  Roboto_Slab, 
  Angkor, 
  Inter,
  Sarpanch
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "800"],
});

const angkor = Angkor({
  variable: "--font-angkor",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

const sarpanch = Sarpanch({
  variable: "--font-sarpanch",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ITC India 2026 - IEEE International Test Conference",
  description: "10th IEEE International Test Conference INDIA - An initiative towards India's semiconductor ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${urbanist.variable} ${poppins.variable} ${robotoSlab.variable} ${angkor.variable} ${inter.variable} ${sarpanch.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
