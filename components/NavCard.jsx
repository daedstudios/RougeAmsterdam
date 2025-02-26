"use client";
import Image from "next/image";
import React from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const NavCard = ({ Text }) => {
  const ArrowRef = React.useRef(null);

  return (
    <div
      className="row-span-1 col-span-1 w-full h-full flex-col items-left border-t border-[#fff]  text-[2rem]"
      onMouseEnter={() => {
        if (ArrowRef.current) {
          gsap.to(ArrowRef.current, {
            duration: 0.1,
            x: 10,
            y: 10,
            scale: 1.3,
            ease: "power2.inOut",
          });
        }
      }}
      onMouseLeave={() => {
        console.log("Mouse Leave");
        if (ArrowRef.current) {
          gsap.to(ArrowRef.current, {
            duration: 0.1,
            x: 0,
            y: 0,
            scale: 1,
            ease: "power2.inOut",
          });
        }
      }}
    >
      {Text}
      <div className="w-8 h-8" ref={ArrowRef}>
        <Image
          src="/images/icons/arrowNav.svg"
          alt="Arrow"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default NavCard;
