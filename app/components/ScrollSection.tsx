'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import data from '../data/tasks.json';
import TaskSection from './TaskSection';

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const tasks = data.tasks;

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${tasks.length - 1}00vw`,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '7500 top',
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, [tasks.length]);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className={`h-screen flex flex-row relative`}
          style={{
            width: `${tasks.length}00vw`,
          }}
        >
          {tasks.map((task, id) => (
            <TaskSection
              key={id}
              id={task.id}
              title={task.title}
              slug={task.slug}
              technologies={task.technologies}
              date={task.date}
              videoUrl={task.videoUrl}
              url={task.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
