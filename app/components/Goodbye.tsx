'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Photo from '@/public/images/thankyou.jpg';

const Goodbye = () => {
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
        translateX: '-25%',
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
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
        translateX: '25%',
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
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
        translateY: '40%',
        opacity: 0,
        scale: 1,
      },
      {
        translateY: 0,
        opacity: 1,
        scale: 1,
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
        scale: 1.5,
      },
      {
        opacity: 0,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef1.current,
          start: 'top top',
          end: '1200 bottom',
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
    <div className="w-full overflow-hidden relative">
      <div ref={triggerRef}>
        <div
          ref={sectionRef1}
          className="w-full h-auto py-10 flex justify-center items-center"
        >
          <div
            ref={sectionRef6}
            className="absolute translate-x-[-50%] translate-y-[-50%] top-[20%] left-[50%] z-[0] flex justify-center items-center text-neutral-300 font-normal text-xl 2xl:text-3xl"
          >
            Scroll
          </div>
          <div className="h-full flex flex-col justify-start items-center  gap-8 pt-10 2xl:pt-20 3xl:pt-32">
            <div
              ref={sectionRef3}
              className="flex flex-col items-center gap-1 relative z-[3]"
            >
              <h2 className="text-[6vw] text-white font-semibold mb-0 leading-none">
                Thank you
              </h2>
              <h2 className="text-[6vw] text-white font-semibold mb-5 2xl:mb-10 leading-none">
                Inagata Technosmith
              </h2>
              <h4 className="text-xl 2xl:text-3xl 3xl:text-4xl font-normal">
                I learnt a lot of thing which very valuable for me
              </h4>
            </div>
            <div
              ref={sectionRef5}
              className="relative w-[700px] h-[500px] 2xl:w-[800px] 2xl:h-[600px] 3xl:w-[900px] 3xl:h-[700px] bg-neutral-700 z-[0] overflow-visible"
            >
              <Image
                alt="thank-you"
                src={Photo}
                objectFit="cover"
                fill
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goodbye;
