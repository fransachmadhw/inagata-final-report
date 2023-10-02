'use client';

import React, { useEffect, useRef } from 'react';
import InagataLogo from '@/public/icons/inagata-logo.svg';
import UMLogo from '@/public/images/cropped-Lambang-UM.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Greet = () => {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

  const text =
    'Hello, these are what I did when I was an intern in Inagata. Hope you enjoy it.';

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: 'top center',
        end: 'bottom 50%',
      },
      color: '#FFFFFF',
      duration: 1,
      stagger: 1,
    });

    return () => {
      anim.kill();
    };
  }, [lettersRef]);
  return (
    <div className="w-full relative overflow-visible">
      <div>
        <div className="w-full py-[20vh] mt-[-30vh] bg-[#101010]">
          <div
            className="w-full container mx-auto pl-[10%] pr-[20%]"
            ref={triggerRef}
          >
            {text.split('').map((letter, index) => (
              <span
                className="text-reveal text-[10vw] leading-none font-bold text-[#101010]"
                key={index}
                ref={setLettersRef}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greet;
