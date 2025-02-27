"use client";
import { Cross } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const PhoneMenu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef(null);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        width: "100vw",
        duration: 0.5,
      });
    } else {
      gsap.to(menuRef.current, {
        width: 0,
        duration: 0.7,
      });
    }
  }, [menuOpen]);

  return (
    <>
      <div
        className="row-span-1 lg:row-span-2 col-span-1 w-full h-full border-t border-[#fff] text-[2rem]"
        onClick={() => setMenuOpen(true)}
      >
        UPCOMING
      </div>
      <div className="hidden lg:block row-span-1 lg:row-span-2  col-span-1 w-full h-full border-t border-[#fff] text-[2rem]">
        PREVIOUS
      </div>
      <div
        className="fixed top-0 left-0 h-screen w-0 lg:hidden z-50 bg-background flex flex-col 
          justify-start items-center gap-8 text-xl font-bold p-0 overflow-hidden"
        ref={menuRef}
        onClick={() => setMenuOpen(false)}
      >
        <div className="h-28 w-[80%] flex justify-between items-center">
          <Image
            src="/images/LogoRouge.svg"
            alt="Rouge Logo"
            width={200}
            height={150}
            className="translate-y-2 -translate-x-2"
          />
          <Cross
            size={44}
            className="cursor-pointer h-full hover:scale-110 hover:rotate-180 transition-transform duration-100"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <Link href="/" className="h-20 w-[80%] border-t border-[#fff] pt-2">
          Home
        </Link>
        <Link
          href="/gallery"
          className="h-20 w-[80%] border-t border-[#fff] pt-2"
        >
          Gallery
        </Link>
        <Link
          href="/events"
          className="h-20 w-[80%] border-t border-[#fff] pt-2"
        >
          Events
        </Link>
        <Link
          href="/contact"
          className="h-20 w-[80%] border-t border-[#fff] pt-2"
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default PhoneMenu;
