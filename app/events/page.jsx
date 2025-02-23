import Image from "next/image";

const currentEvents = [
  { date: "2024-02-15", text: "Live Jazz Night" },
  { date: "2024-02-20", text: "Dance Workshop" },
  { date: "2024-03-01", text: "Comedy Show" },
  { date: "2024-03-10", text: "Poetry Slam" },
];

const previousEvents = [
  { date: "2023-12-15", text: "Holiday Special" },
  { date: "2023-11-30", text: "Open Mic Night" },
  { date: "2023-11-15", text: "Art Exhibition" },
  { date: "2023-11-01", text: "Music Festival" },
];

export default function About() {
  return (
    <>
      {currentEvents.map((i, index) => (
        <div
          className="col-span-1 row-span-1 lg:row-span-2 border-t-2 border-[#fff]"
          key={i + 6}
        >
          {i.text}
        </div>
      ))}
      {previousEvents.map((i, index) => (
        <div
          className="col-span-1 row-span-1 lg:row-span-2 opacity-65 border-t-2 border-[#fff]"
          key={i}
        >
          {i.text}
        </div>
      ))}
    </>
  );
}
