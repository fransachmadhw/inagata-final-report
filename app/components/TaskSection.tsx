'use client';

import React from 'react';

const TaskSection = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full container mx-auto px-20 py-32 2xl:px-10 2xl:py-[240px]">
        <div className="w-full h-full flex flex-row gap-0 justify-between items-start">
          <div className="w-[65%] h-full bg-red-400">1</div>
          <div className="w-[35%] h-full bg-red-600">2</div>
        </div>
      </div>
    </div>
  );
};

export default TaskSection;
