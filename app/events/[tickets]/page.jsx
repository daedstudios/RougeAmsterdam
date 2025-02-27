"use client";

import { useState } from "react";
import { currentEvents } from "@/config/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronsUpDown } from "lucide-react";

export default function TicketPage({ params }) {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const ticket = params.tickets;
  const data = currentEvents.filter((event) => event.slug === ticket);
  const currentEventData = data[0];

  if (!currentEventData) {
    return <p className="text-white">Event not found</p>;
  }

  const handleTicketChange = (event) => {
    setTicketQuantity(Number(event.target.value));
  };

  return (
    <>
      <div className="h-full col-span-1 border-t border-[#fff] row-span-2 lg:row-span-6">
        <div className="relative w-full h-full">
          <Image
            src={`/images/${currentEventData.image || "tickets.png"}`}
            alt="club"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="h-full text-[2rem] col col-span-1 border-t border-[#fff] lg:row-span-2 row-span-2">
        <div className="text-[1rem] pt-2">{currentEventData.date}</div>
        {currentEventData.text}
        <div className="text-[1.5rem] lg:hidden h-full pt-4 border-[#fff]">
          {currentEventData.description}
        </div>
      </div>

      <div className=" h-full pt-4 col hidden md:hidden lg:block lg:row-span-2 col-span-1 row-span-2">
        {currentEventData.description}
      </div>

      <div className="h-full text-[2rem] md:pt-0 pt-28 lg:pt-0 col col-span-1 lg:row-span-3 row-span-3">
        <form className="pt-4 justify-between flex flex-col gap-4 text-white text-lg">
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
            <select
              className="bg-transparent rounded-none appearance-none border-b border-white outline-none w-full pb-2 text-white text-lg pr-10"
              value={ticketQuantity}
              onChange={handleTicketChange}
            >
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

        <div className="pt-8 justify-between items-center flex flex-wrap">
          <span className="text-[1rem]">
            total: ${currentEventData.price * ticketQuantity} USD
          </span>
          <Link
            className="border border-white w-40 flex justify-between p-4 align-middle items-center text-[1rem] rounded-[3rem] h-8 lg:h-12 pl-3 cursor-pointer hover:rounded-[3rem] hover:w-[40%] hover:h-12 hover:shadow-xl duration-150"
            href="/ticket"
          >
            Buy Now
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}
