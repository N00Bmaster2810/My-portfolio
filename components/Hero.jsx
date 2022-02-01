import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-2 divide-x">
        <div className="flex justify-around mx-0 px-0 my-5 rounded-full items-center ">
          <img src="/profile.jpg" alt="Profile photo" className="rounded-full w-4/5 h-4/5" />
        </div>
        <div className="flex flex-col items-center justify-center mr-2">
          <div>
            <p className="md:text-6xl text-3xl sm:text-4xl sm:tracking-widest text-gradient md:px-2 px-1 md:my-2">Hey there, </p>
            <p className="md:text-6xl text-xl sm:text-4xl text-white sm:tracking-wide md:px-5 pl-2 md:my-5">I&apos;m Satya Prakash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
