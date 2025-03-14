import { Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
// import NavCard from "@/components/navcard";
import Image from "next/image";
import NavCard from "@/components/NavCard";
import { TransitionProvider } from "@/components/TransitionProvider";
import PhoneMenu from "@/components/PhoneMenu";
// import { Link } from "next-transition-router";

const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ROUGE Amsterdam techno club",
  description:
    "ROUGE Amsterdam is a techno club known for its raw energy and underground spirit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${splineMono.variable} antialiased text-[1.25rem] bg-background text-foreground`}
      >
        <TransitionProvider>
          <div className="hidden fixed top-0 left-0 lg:grid grid-rows-5 w-1/5 h-screen gap-2 max-h-screen py-2 pl-2">
            <Link href="/" className="border-t border-[#fff]">
              <div className="relative col-span-1 row-span-1 h-[70%] w-[70%] xl:w-[80%] xl:h-[80%] xl:mt-4 hover:scale-110 hover:translate-x-4 duration-200">
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
          <div className="absolute top-0 right-0 w-full lg:w-4/5 p-2 overflow-y-auto h-[260vh] lg:h-screen grid  gap-2 grid-cols-1 lg:grid-cols-2 grid-rows-9 lg:grid-rows-10">
            <PhoneMenu />
            {children}
          </div>
        </TransitionProvider>
      </body>
    </html>
  );
}
