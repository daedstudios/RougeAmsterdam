import { Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
// import NavCard from "@/components/navcard";
import Image from "next/image";
import NavCard from "@/components/NavCard";
import { TransitionProvider } from "@/components/TransitionProvider";
// import { Link } from "next-transition-router";

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amsterdam techno club",
  description: "fun and cool place to enjoy techno",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${splineMono.variable} antialiased bg-background text-foreground`}
      >
        <TransitionProvider>
          <div className="hidden fixed top-0 left-0 lg:grid grid-rows-5 w-1/5 h-screen gap-2 max-h-screen py-2">
            <Link href="/">
              <div className="relative col-span-1 border-t-2 border-[#fff] row-span-1 h-full w-full">
                <Image
                  src="/images/LogoRouge.svg"
                  alt="Rouge Logo"
                  className="w-full h-full"
                  layout="fill"
                />
              </div>
            </Link>
            <Link href="/">
              <NavCard Text="About" />
            </Link>
            <Link href="/gallery">
              <NavCard Text="Gallery" />
            </Link>
            <Link href="/events">
              <NavCard Text="Events" />
            </Link>
            <Link href="/contact">
              <NavCard Text="Contact" />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-full lg:w-4/5 p-2 overflow-y-auto h-[200vh] lg:h-screen grid  gap-2 grid-cols-1 lg:grid-cols-2 grid-rows-10">
            {/* this is phone nav these two divs */}
            <div className="row-span-1 lg:row-span-2 col-span-1 w-full h-full border-t-2 border-[#fff] p-2 text-[2rem]">
              "rsgbsergbvs"
            </div>
            <div className="row-span-1 lg:row-span-2  col-span-1 w-full h-full border-t-2 border-[#fff] p-2 text-[2rem]">
              "rsgbsergbvs"
            </div>
            {children}
          </div>
        </TransitionProvider>
      </body>
    </html>
  );
}
