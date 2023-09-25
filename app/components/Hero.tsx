'use client';

import React from 'react';
import InagataLogo from '@/public/icons/inagata-logo.svg';
import UMLogo from '@/public/images/cropped-Lambang-UM.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-full h-screen py-10 flex justify-center items-center">
        <div className="h-full flex flex-col justify-between items-center gap-4">
          <div className="flex items-center justify-center gap-6">
            <Image
              src={UMLogo}
              alt="UM-Logo"
              className="w-10 xl:w-[70px]"
            />
            <Image
              src={InagataLogo}
              alt="Inagata-Logo"
              className="w-10 xl:w-[200px]"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-7xl font-semibold">Final Report</h2>
            <h4 className="text-xl font-normal">
              12 June - 12 October
            </h4>
          </div>
          <div className="w-[50%]">
            <Marquee
              autoFill
              gradient
              gradientColor="rgb(51, 51, 51)"
            >
              <div className="flex items-center justify-center gap-5 px-5">
                <h4 className="uppercase text-2xl font-normal">
                  Frans Achmad Hendra Winata
                </h4>
                <div className="text-2xl font-normal">|</div>
                <h4 className="uppercase text-2xl font-normal">
                  Front End Development
                </h4>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
