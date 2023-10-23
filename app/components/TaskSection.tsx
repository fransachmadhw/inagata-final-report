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
      <div className="w-full h-full container mx-auto px-20 py-32 2xl:px-10 2xl:py-40 3xl:py-72">
        <div className="w-full h-full flex flex-row gap-5 2xl:gap-7 justify-between items-start">
          <div className="video-container w-[65%] h-full bg-neutral-900 relative overflow-hidden">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
          <div className="w-[35%] h-full bg-transparent">
            <div className="w-full h-full flex flex-col items-end justify-between text-right text-white pl-10 py-6 3xl:py-20">
              <a
                href={url}
                target="_blank"
                className="text-5xl 2xl:text-6xl 3xl:text-[92px] font-medium"
              >
                {title}
              </a>
              <div className="text-neutral-300 flex flex-col items-end gap-3">
                <p className="text-xl 2xl:text-[28px] 3xl:text-4xl font-normal">
                  Technologies: {technologies}
                </p>
                <p className="text-xl 2xl:text-[28px] 3xl:text-4xl font-normal">
                  {date}
                </p>
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
