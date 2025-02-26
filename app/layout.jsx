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
        className={`${splineMono.variable} antialiased text-[1.25rem] bg-background text-foreground`}
      >
        <TransitionProvider>
          <div className="hidden fixed top-0 left-0 lg:grid grid-rows-5 w-1/5 h-screen gap-2 max-h-screen py-2">
            <Link href="/" className="border-t-2 border-[#fff]">
              <div className="relative col-span-1 row-span-1 h-[70%] w-[70%] xl:w-[60%] xl:h-[60%] xl:mt-4 hover:scale-110 hover:translate-x-4 duration-200">
                <Image
                  src="/images/LogoRouge.svg"
                  alt="Rouge Logo"
                  layout="fill"
                />
              </div>
            </Link>
            <Link href="/">
              <NavCard Text="ABOUT" />
            </Link>
            <Link href="/gallery">
              <NavCard Text="GALLERY" />
            </Link>
            <Link href="/events">
              <NavCard Text="EVENTS" />
            </Link>
            <Link href="/contact">
              <NavCard Text="CONTACT" />
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-full lg:w-4/5 p-2 overflow-y-auto h-[300vh] lg:h-screen grid  gap-2 grid-cols-1 lg:grid-cols-2 grid-rows-10">
            {/* this is phone nav these two divs */}
            <div className="row-span-1 lg:row-span-2 col-span-1 w-full h-full border-t-2 border-[#fff] p-2 text-[2rem]">
              UPCOMING
            </div>
            <div className="row-span-1 lg:row-span-2  col-span-1 w-full h-full border-t-2 border-[#fff] p-2 text-[2rem]">
              PREVIOUS
            </div>
            {children}
          </div>
        </TransitionProvider>
      </body>
    </html>
  );
}
