import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavCard from "@/components/NavCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#310000] text-white max-w-screen overflow-y-auto overflow-x-hidden text-[1.5rem]`}
      >
        <div className="hidden fixed top-0 left-0 lg:grid grid-rows-5 w-1/5 h-screen gap-2 max-h-screen py-2">
          <Link href="/about">
            <NavCard Text="About" />
          </Link>
          <Link href="/gallery">
            <NavCard Text="Gallery" />
          </Link>
          <Link href="/Events">
            <NavCard Text="Events" />
          </Link>
          <Link href="/Contact">
            <NavCard Text="Contact" />
          </Link>
          <Link href="/Contact">
            <NavCard Text="Contact" />
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-full lg:w-4/5 p-2 overflow-y-auto h-screen grid max-h-screen gap-2 grid-cols-2 grid-rows-5">
          {/* <div> */}
          <NavCard Text="Contact" />
          <NavCard Text="Contact" />
          {/* </div> */}
          {children}
        </div>
      </body>
    </html>
  );
}
