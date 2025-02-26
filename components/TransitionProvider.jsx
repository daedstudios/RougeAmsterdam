"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";
import Image from "next/image";

export function TransitionProvider({ children }) {
  const firstLayer = useRef(null);
  const secondLayer = useRef(null);
  return (
    <TransitionRouter
      auto={true}
      leave={(next, from, to) => {
        console.log({ from, to });

        const tl = gsap
          .timeline({
            onComplete: next,
          })
          .fromTo(
            firstLayer.current,
            { y: "100%" },
            {
              y: 0,
              duration: 0.5,
              ease: "circ.inOut",
            }
          )
          .fromTo(
            secondLayer.current,
            {
              y: "100%",
            },
            {
              y: 0,
              duration: 0.5,
              ease: "circ.inOut",
            },
            "<50%"
          );

        return () => {
          tl.kill();
        };
      }}
      enter={(next) => {
        const tl = gsap
          .timeline()
          .fromTo(
            secondLayer.current,
            { y: 0 },
            {
              y: "-100%",
              duration: 0.5,
              ease: "circ.inOut",
            }
          )
          .fromTo(
            firstLayer.current,
            { y: 0 },
            {
              y: "-100%",
              duration: 0.5,
              ease: "circ.inOut",
            },
            "<50%"
          )
          .call(next, undefined, "<50%");

        return () => {
          tl.kill();
        };
      }}
    >
      {children}

      {/* <div
        className="h-screen w-screen -translate-x-full z-[999] fixed top-0 left-0 bg-black"
        ref={firstLayer}
      ></div> */}

      <div
        ref={firstLayer}
        className="fixed inset-0 z-[999] translate-y-full bg-background text-8xl text-center flex items-center justify-center"
        key={1}
      ></div>
      <div
        ref={secondLayer}
        className="fixed inset-0 z-[999] translate-y-full bg-background text-8xl text-center flex items-center justify-center"
        key={2}
      >
        <Image src="/images/R.svg" alt="Rouge Logo" width={240} height={120} />
      </div>
    </TransitionRouter>
  );
}
