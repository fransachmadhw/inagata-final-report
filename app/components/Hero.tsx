'use client';

import React, { useEffect, useRef } from 'react';
import InagataLogo from '@/public/icons/inagata-logo.svg';
import UMLogo from '@/public/images/cropped-Lambang-UM.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Hero = () => {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const sectionRef5 = useRef(null);
  const sectionRef6 = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin1 = gsap.fromTo(
      sectionRef2.current,
      {
        translateX: 0,
        opacity: 1,
      },
      {
        translateX: '-25%',
        opacity: 0,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '1500 bottom',
          scrub: 1,
          pin: true,
        },
      }
    );

    const pin2 = gsap.fromTo(
      sectionRef3.current,
      {
        translateX: 0,
        opacity: 1,
      },
      {
        translateX: '25%',
        opacity: 0,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: 'top top',
          end: '1500 bottom',
          scrub: 1,
          pin: false,
        },
      }
    );

    const pin3 = gsap.fromTo(
      sectionRef4.current,
      {
        translateX: 0,
        opacity: 1,
      },
      {
        translateX: '-25%',
        opacity: 0,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: 'top top',
          end: '1500 bottom',
          scrub: 1,
          pin: false,
        },
      }
    );

    const pin4 = gsap.fromTo(
      sectionRef5.current,
      {
        opacity: 1,
        scale: 1,
      },
      {
        opacity: 0,
        scale: 2,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: 'top top',
          end: '1500 bottom',
          scrub: 1,
          pin: false,
        },
      }
    );

    const pin5 = gsap.fromTo(
      sectionRef6.current,
      {
        opacity: 1,
        scale: 1,
      },
      {
        opacity: 0,
        scale: 2,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: 'top top',
          end: '1500 bottom',
          scrub: 1,
          pin: false,
        },
      }
    );

    return () => {
      pin1.kill();
      pin2.kill();
      pin3.kill();
      pin4.kill();
      pin5.kill();
    };
  }, []);
  return (
    <div className="w-full overflow-hidden">
      <div
        ref={sectionRef5}
        className="fixed translate-x-[-50%] translate-y-[-50%] top-[50%] left-[30%] w-[300px] h-[300px] rounded-full bg-red-500 blur-[128px] opacity-75 z-[2]"
      ></div>
      <div
        ref={sectionRef6}
        className="fixed translate-x-[-50%] translate-y-[-50%] top-[50%] right-[30%] w-[200px] h-[200px] rounded-full bg-red-700 blur-[128px] opacity-75 z-[2]"
      ></div>
      <div ref={triggerRef}>
        <div
          ref={sectionRef1}
          className="w-full h-screen py-10 flex justify-center items-center"
        >
          <div className="h-full flex flex-col justify-between items-center gap-4">
            <div
              ref={sectionRef2}
              className="flex items-center justify-center gap-6"
            >
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
            <div
              ref={sectionRef3}
              className="flex flex-col items-center gap-2 relative z-[3]"
            >
              <h2 className="text-[15vw] text-reveal-hero text-black font-semibold">
                Final Report
              </h2>
              <h4 className="text-xl font-normal">
                12 June - 12 October
              </h4>
            </div>
            <div ref={sectionRef4} className="w-[50%] relative z-0">
              <Marquee autoFill gradient gradientColor="rgb(0, 0, 0)">
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
    </div>
  );
};

export default Hero;
