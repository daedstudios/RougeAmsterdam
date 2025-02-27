"use client";

import { X, AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

gsap.registerPlugin(useGSAP);

const PhoneMenu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef(null);

  const path = usePathname();
  const [textNav, setTextNav] = useState({
    firstText: "main",
    secondText: "PREVIOUS",
  });

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

  const switchtextNav = (path) => {
    const newTextObj = {};
    switch (path) {
      case "/events":
        newTextObj.firstText = "COMING UP";
        newTextObj.secondText = "PREVIOUS";
        setTextNav(newTextObj);
        break;
      case (path.match(/^\/events\/.*/) || {}).input:
        newTextObj.firstText = "";
        newTextObj.secondText = "TICKETS";
        setTextNav(newTextObj);
        break;
      case "/gallery":
        newTextObj.firstText = "";
        newTextObj.secondText = "GALLERY";
        setTextNav(newTextObj);
        break;
      case "/contact":
        newTextObj.firstText = "WE ARE WAITING";
        newTextObj.secondText = "CONTACT";
        setTextNav(newTextObj);
        break;
      case "/":
        newTextObj.firstText = "ABOUT";
        newTextObj.secondText = "ROUGE AMSTERDAM";
        setTextNav(newTextObj);
        break;
      default:
        newTextObj.firstText = "ABOUT";
        newTextObj.secondText = "ROUGE AMSTERDAM";
        setTextNav(newTextObj);
        break;
    }
  };

  useEffect(() => {
    switchtextNav(path);
    console.log("router", path);
  }, [path]);

  return (
    <>
      <div className="row-span-1 px-2 lg:row-span-2 col-span-1 w-full h-full text-[2rem] flex flex-col justify-center items-center lg:hidden">
        <div
          className="h-[50%] w-full flex justify-between items-center"
          onClick={() => setMenuOpen(true)}
        >
          <Image
            src="/images/LogoRouge.svg"
            alt="Rouge Logo"
            width={120}
            height={80}
            className="translate-y-2 -translate-x-2"
          />
          <AlignJustify size={44} />
        </div>
        <p className="h-[50%] w-full flex items-center">{textNav.firstText}</p>
      </div>
      <div
        className="row-span-1 lg:row-span-2 col-span-1 w-full h-full border-t border-[#fff] text-[2rem] hidden lg:block"
        onClick={() => setMenuOpen(true)}
      >
        <p>{textNav.firstText}</p>
      </div>
      <div className="hidden lg:block row-span-1 lg:row-span-2  col-span-1 w-full h-full border-t border-[#fff] text-[2rem]">
        {textNav.secondText}
      </div>
      <div
        className="fixed top-0 left-0 h-screen w-0 lg:hidden z-50 bg-background flex flex-col 
          justify-start items-center gap-8 text-xl px-0 pt-2 overflow-hidden"
        ref={menuRef}
        onClick={() => setMenuOpen(false)}
      >
        <div className="h-28 w-[100%] px-4 flex justify-between items-center">
          <Image
            src="/images/LogoRouge.svg"
            alt="Rouge Logo"
            width={120}
            height={80}
            className="translate-y-2 -translate-x-2"
          />
          <X
            size={44}
            className="cursor-pointer h-full hover:scale-110 hover:rotate-180 transition-transform duration-100"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <Link
          href="/"
          className="h-20 text-[2rem] px-2 w-full border-t border-[#fff] pt-2"
        >
          HOME
          <div className="w-8 h-8 pt-2 ">
            <Image
              src="/images/icons/arrowNav.svg"
              alt="Arrow"
              width={32}
              height={32}
            />
          </div>
        </Link>
        <Link
          href="/gallery"
          className="h-20 w-full px-2 text-[2rem] border-t border-[#fff] pt-2"
        >
          GALLERY
          <div className="w-8 h-8 pt-2 ">
            <Image
              src="/images/icons/arrowNav.svg"
              alt="Arrow"
              width={32}
              height={32}
            />
          </div>
        </Link>
        <Link
          href="/events"
          className="h-20 w-full px-2 text-[2rem] border-t border-[#fff] pt-2"
        >
          EVENTS
          <div className="w-8 h-8 pt-2 ">
            <Image
              src="/images/icons/arrowNav.svg"
              alt="Arrow"
              width={32}
              height={32}
            />
          </div>
        </Link>
        <Link
          href="/contact"
          className="h-20 w-full px-2 text-[2rem] border-t border-[#fff] pt-2"
        >
          CONTACT
          <div className="w-8 h-8 pt-2 ">
            <Image
              src="/images/icons/arrowNav.svg"
              alt="Arrow"
              width={32}
              height={32}
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default PhoneMenu;
