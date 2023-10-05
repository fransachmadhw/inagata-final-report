'use client';

import React from 'react';

interface TaskSectionProps {
  id: number;
  title: string;
  slug?: string;
  technologies: string;
  date?: string;
  videoUrl: string;
  url?: string;
}

const TaskSection: React.FC<TaskSectionProps> = ({
  id,
  title,
  slug,
  technologies,
  date,
  videoUrl,
  url,
}) => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full container mx-auto px-20 py-32 2xl:px-10 2xl:py-[240px]">
        <div className="w-full h-full flex flex-row gap-0 justify-between items-start">
          <div className="video-container w-[65%] h-full bg-neutral-900 relative overflow-hidden">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            {/* <div className="video-overlay absolute flex w-full h-full bg-neutral-900 top-0 left-0 right-0 bottom-0 opacity-50 justify-center items-center px-20 transition ease-in-out z-[99] hover:opacity-90">
              <p className="text-white text-lg text-center">
                Discover the Perfect Blend of Modesty and Fashion at
                Zadakheir Fashion. Shop Now and Embrace Your Unique
                Style with Confidence!
              </p>
            </div> */}
          </div>
          <div className="w-[35%] h-full bg-transparent">
            <div className="w-full h-full flex flex-col items-end justify-between text-right text-white pl-10 py-6">
              <a
                href={url}
                target="_blank"
                className="text-5xl font-medium"
              >
                {title}
              </a>
              <div className="text-neutral-300 flex flex-col items-end gap-3">
                <p className="text-xl font-normal">
                  Technologies: {technologies}
                </p>
                <p className="text-xl font-normal">{date}</p>
              </div>
              <a href={url} target="_blank" className="link">
                <span className="z-10">Find out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskSection;
