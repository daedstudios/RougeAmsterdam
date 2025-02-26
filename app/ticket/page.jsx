import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownLeftSquareIcon,
  ArrowUpRight,
  ChevronsUpDown,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="h-full col-span-1 border-t border-[#fff] row-span-2 lg:row-span-6">
        <div className="relative w-full h-full">
          <Image
            src="/images/tickets.png"
            alt="club"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="h-full text-[2rem] col col-span-1 border-t border-[#fff] lg:row-span-2 row-span-1">
        <div className="text-[1rem] pt-2"> date</div>
        EVENT HEADING
      </div>
      <div className="border-t h-full col  border-[#fff] lg:row-span-2 col-span-1 row-span-1">
        where raw energy meets hypnotic beats. A haven for techno lovers, ROUGE
        is more than just a club; it's an immersive experience of deep bass,
        pulsating lights, and an electrifying atmosphere. Rooted in the
      </div>
      <div className="h-full text-[2rem] col col-span-1 lg:row-span-2 row-span-1">
        <form className=" pt-4 justify-between flex flex-col gap-4 text-white text-lg">
          <input
            type="text"
            placeholder="first name"
            className="bg-transparent border-b border-white outline-none w-full pb-2 placeholder:text-gray-300"
          />
          <input
            type="text"
            placeholder="last name"
            className="bg-transparent border-b border-white outline-none w-full pb-2 placeholder:text-gray-300"
          />
          <input
            type="email"
            placeholder="email"
            className="bg-transparent border-b border-white outline-none w-full pb-2 placeholder:text-gray-300"
          />
          <div className="relative w-full">
            <select className="bg-transparent rounded-none appearance-none border-b border-white outline-none w-full pb-2 text-white text-lg pr-10">
              <option className="bg-black text-white" value="1">
                1 ticket
              </option>
              <option className="bg-black text-white" value="2">
                2 tickets
              </option>
              <option className="bg-black text-white" value="3">
                3 tickets
              </option>
              <option className="bg-black text-white" value="4">
                4 tickets
              </option>
            </select>
            <ChevronsUpDown
              size={18}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
            />
          </div>
        </form>
      </div>
    </>
  );
}
