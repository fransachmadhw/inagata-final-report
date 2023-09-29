'use client';

import React, { useEffect, useRef } from 'react';
import InagataLogo from '@/public/icons/inagata-logo.svg';
import UMLogo from '@/public/images/cropped-Lambang-UM.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Coba = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  //   useEffect(() => {
  //     const pin = gsap.fromTo(
  //       sectionRef.current,
  //       {
  //         translateY: '-100vh',
  //       },
  //       {
  //         translateY: '0vh',
  //         ease: 'none',
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: triggerRef.current,
  //           start: 'top top',
  //           end: '2000 bottom',
  //           scrub: 1,
  //           pin: true,
  //         },
  //       }
  //     );

  //     return () => {
  //       pin.kill();
  //     };
  //   }, []);
  return (
    <div
      ref={triggerRef}
      className="w-full relative overflow-visible"
    >
      <div ref={sectionRef}>
        <div className="w-full h-[200vh] mt-[-25vh] bg-green-400"></div>
      </div>
    </div>
  );
};

export default Coba;
