import { ArrowDownLeftSquareIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { currentEvents, previousEvents } from "@/config/data";

export default function About() {
  return (
    <>
      {currentEvents.map((i, index) => (
        <div
          className="col-span-1 row-span-1 lg:row-span-2 border-t border-[#fff] flex flex-col justify-evenly items-start align-middle"
          key={i + 6}
        >
          <div className="text-[0.85rem]"> {i.date}</div>
          <div>{i.text}</div>

          <Link
            className="border border-white w-40 flex justify-between p-4 align-middle items-center  text-[1rem] rounded-[3rem] h-8 Lg:h-12 pl-3 cursor-pointer hover:rounded-[3rem] hover:w-[40%] hover:h-12 hover:shadow-xl duration-150 "
            href={`/events/${i.slug}`}
          >
            get tickets
            <ArrowUpRight size={18} />
          </Link>
        </div>
      ))}
      {previousEvents.map((i, index) => (
        <div
          className="col-span-1 row-span-1 lg:row-span-2 border-t border-[#fff] flex flex-col justify-evenly items-end align-middle opacity-55 "
          key={i}
        >
          <div>{i.text}</div>
          <Link
            className="border border-white w-40 flex justify-between p-4 align-middle items-center  text-[1rem] rounded-[3rem] h-8 Lg:h-12 pl-3 cursor-pointer hover:rounded-[3rem] hover:w-[40%] hover:h-12 hover:shadow-xl duration-150"
            href="/gallery"
          >
            see gallery
            <ArrowUpRight size={18} />
          </Link>
        </div>
      ))}
    </>
  );
}
