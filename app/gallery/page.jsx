import { StepBack, StepForward } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <div className="relative border-t border-[#fff] row-span-2 lg:row-span-6">
        <Image
          src="/images/gallery3.png"
          alt="club"
          layout="fill"
          objectFit="cover"
          className="pt-2"
        />
      </div>
      <div className="border-t border-[#fff] row-span-5 lg:row-span-6 flex flex-wrap flex-col overflow-hidden pt-2">
        <div className="flex flex-col w-[100%] lg:w-[50%] h-full gap-2">
          <div className="relative h-[30%]">
            <Image
              src="/images/gallery4.png"
              alt="club"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative h-[70%]">
            <Image
              src="/images/gallery2.png"
              alt="club"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="hidden lg:block relative max-w-[100%] lg:w-[50%] box-content ml-2 h-full">
          <Image
            src="/images/gallery1.png"
            alt="club"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 border-t border-[#fff] row-span-1 lg:row-span-2 flex justify-between items-end p-4">
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
