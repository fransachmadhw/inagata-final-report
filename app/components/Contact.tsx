import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import Face from '@/public/images/face.png';

const Contact = () => {
  return (
    <div className="w-full py-10">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[50%] 2xl:w-[40%] 3xl:w-[35%] flex justify-between items-center">
          <div className="flex flex-col items-start gap-5 z-10">
            <div className="flex gap-3 items-center">
              <a
                href="https://github.com/fransachmadhw"
                target="_blank"
                className="text-5xl text-neutral-300"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/fransachmadhw/"
                target="_blank"
                className="text-5xl text-neutral-300"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.instagram.com/fransachmadhw/"
                target="_blank"
                className="text-5xl text-neutral-300"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://www.youtube.com/@fransachmadhw"
                target="_blank"
                className="text-5xl text-neutral-300"
              >
                <AiFillYoutube />
              </a>
            </div>
            <a
              href="https://www.frans.my.id/"
              target="_blank"
              className="font-light text-white text-5xl"
            >
              frans.my.id
            </a>
          </div>
          <div className="flex flex-col items-start">
            <div className="relative rounded-full w-[150px] h-[150px]">
              <Image
                alt="face"
                src={Face}
                fill
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
