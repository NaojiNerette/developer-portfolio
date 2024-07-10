// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative card lg:card-side bg-base-100 shadow-xl rounded-box py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="card-body ">
          <h2 className="card-title font-medium mb-5 text-[#16f2b3] text-xl uppercase"> Who I am?</h2>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <figure>
          <Image
              src={personalData.profile}
              width={280}
              height={280}
              alt="Joan Bascur"
              className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
        </figure>
      </div>

      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
    </div>
  );
};

export default AboutSection;