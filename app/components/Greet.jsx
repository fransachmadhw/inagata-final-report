'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Greet = () => {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

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
        end: 'bottom 85%',
      },
      color: '#FFFFFF',
      duration: 1,
      stagger: 1,
    });

    // const anim2 = gsap.to(sectionRef.current, {
    //   y: () =>
    //     -(
    //       document.getElementById('containerText').scrollHeight -
    //       document.documentElement.clientHeight
    //     ),
    //   ease: 'none',
    //   duration: 1,
    //   stagger: 1,
    //   scrollTrigger: {
    //     trigger: triggerRef.current,
    //     scrub: true,
    //     pin: true,
    //     start: 'top top',
    //     end: '2500 bottom',
    //   },
    // });

    return () => {
      // anim2.kill();
      anim.kill();
    };
  }, [lettersRef]);
  return (
    <div className="w-full relative overflow-visible">
      <div>
        <div
          ref={triggerRef}
          className="w-full py-[20vh] 3xl:py-[10vh] mt-[-30vh] 3xl:mt-[0vh] bg-[#101010]"
        >
          <div
            id="containerText"
            className="w-full h-fit container mx-auto pl-[10%] pr-[30%] 2xl:pr-[35%] 3xl:pr-[38%]"
            ref={sectionRef}
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
