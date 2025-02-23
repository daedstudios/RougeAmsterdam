
import { Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavCard from "@/components/NavCard";


const splineMono = Spline_Sans_Mono({
  variable: "--font-spline-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${splineMono.variable} antialiased bg-[#310000] text-white`}
      >
        <div className="flex gap-2">
          <div className="hidden lg:grid w-1/5 h-screen gap-2">
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
          </div>
          <div className="w-full lg:w-4/5">
            <div className="hidden lg:flex gap-2 mb-2">
              <div className="w-1/2 ">
                <NavCard Text={"aosm3e text"} />
              </div>
              <div className="w-1/2 ">
                <NavCard Text={"aosm3e text"} />
              </div>
            </div>
            <div className="min-h-20 bg-black">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
