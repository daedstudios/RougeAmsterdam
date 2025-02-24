import { StepBack, StepForward } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <div className="relative col-span-1 border-t-2 border-[#fff]  row-span-3 lg:row-span-6">
        <Image
          src="/images/gallery1.png"
          alt="club"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative col-span-1 border-t-2 border-[#fff]  row-span-3 lg:row-span-6">
        <Image
          src="/images/gallery1.png"
          alt="club"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="col-span-1 lg:col-span-2 border-t-2 border-[#fff]  row-span-2 flex justify-between items-end p-4">
        <StepBack
          size={40}
          className="cursor-pointer hover:opacity-55 hover:scale-110"
        />
        <StepForward
          size={40}
          className="cursor-pointer hover:opacity-55 hover:scale-110"
        />
      </div>
    </>
  );
}
