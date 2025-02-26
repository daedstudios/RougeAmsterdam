import Image from "next/image";
import Link from "next/link";
import { ArrowDownLeftSquareIcon, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="justify-between flex flex-col h-full col-span-1 border-t border-[#fff] row-span-2 lg:row-span-6">
        <div className="">
          where raw energy meets hypnotic beats. A haven for techno lovers,
          ROUGE is more than just a club; it's an immersive experience of deep
          bass, pulsating lights, and an electrifying atmosphere. Rooted in the
          underground scene, we bring together cutting-edge sound,
          boundary-pushing artists, and a crowd that lives for the rhythm. Step
          inside, lose yourself, and let the night take over.
        </div>

        <Link
          className="flex justify-start gap-4 hover:gap-8 pb-4 align-middle items-center cursor-pointer duration-150"
          href="/events"
        >
          upcoming events
          <ArrowUpRight size={24} />
        </Link>
      </div>
      <div className="relative col-span-1 border-t border-[#fff] row-span-3 lg:row-span-6">
        <Image
          src="/images/home.png"
          alt="club"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="col-span-1 lg:col-span-2 border-t border-[#fff] row-span-2">
        We have zero tolerance for discrimination, harassment, or any form of
        disrespect. No sexism, no racism, no homophobia—no exceptions. Consent
        and respect are non-negotiable.
      </div>
    </>
  );
}
