import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="col-span-1 border-t-4 border-[#fff] row-span-3">
        where raw energy meets hypnotic beats. A haven for techno lovers, ROUGE
        is more than just a club; it's an immersive experience of deep bass,
        pulsating lights, and an electrifying atmosphere. Rooted in the
        underground scene, we bring together cutting-edge sound,
        boundary-pushing artists, and a crowd that lives for the rhythm. Step
        inside, lose yourself, and let the night take over.
      </div>
      <div className="relative col-span-1 border-t-4 border-[#fff] row-span-3 h-auto">
        <Image
          src="/images/home.png"
          alt="club"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="col-span-2 border-t-4 border-[#fff] row-span-1">
        We have zero tolerance for discrimination, harassment, or any form of
        disrespect. No sexism, no racism, no homophobia—no exceptions. Consent
        and respect are non-negotiable.
      </div>
    </>
  );
}
