'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
    });

    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.9,
    });
  };

  useEffect(() => {
    gsap.set(cursorRef, {
      xPercent: 100,
      yPercent: 100,
    });

    gsap.set(followerRef, {
      xPercent: -100,
      yPercent: -100,
    });

    window.addEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div>
      <div
        ref={cursorRef}
        className="cursor fixed w-3 h-3 rounded-full z-[999] bg-red-600"
      ></div>
      <div
        ref={followerRef}
        className="follower-cursor fixed w-10 h-10 top-[-14px] left-[-14px] bg-transparent border border-white z-[999] rounded-full pointer-events-none"
      ></div>
    </div>
  );
};

export default CustomCursor;
