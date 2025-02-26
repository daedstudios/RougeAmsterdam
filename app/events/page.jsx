import { ArrowDownLeftSquareIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const currentEvents = [
  {
    date: "2024-02-15",
    text: "Live Jazz Night: Featuring local artists performing classic jazz standards",
  },
  {
    date: "2024-02-20",
    text: "Dance Workshop: Learn contemporary moves with professional dance",
  },
  {
    date: "2024-03-01",
    text: "Comedy Show: Stand-up performances by Amsterdam's best upcoming comedy talents",
  },
  {
    date: "2024-03-10",
    text: "Poetry Slam: Join us for an evening of powerful spoken word performances",
  },
];

const previousEvents = [
  {
    date: "2023-12-15",
    text: "Holiday Special: Celebrating the season with music, food, and festive drinks",
  },
  {
    date: "2023-11-30",
    text: "Open Mic Night: Showcase your talents in music, comedy, or poetry",
  },
  {
    date: "2023-11-15",
    text: "Art Exhibition: Local artists present their works in various mediums",
  },
  {
    date: "2023-11-01",
    text: "Music Festival: A full day of live performances across multiple genres",
  },
];

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
            href="/ticket"
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
          <div className="border border-white w-40 flex justify-end align-middle items-center gap-2 text-[1rem] rounded-[3rem] h-8 Lg:h-12 pr-3 cursor-pointer hover:rounded-sm hover:w-[85%] hover:h-12 hover:shadow-xl duration-150 opacity-55 hover:opacity-100">
            see gallery
            <ArrowUpRight size={18} />
          </div>
        </div>
      ))}
    </>
  );
}
