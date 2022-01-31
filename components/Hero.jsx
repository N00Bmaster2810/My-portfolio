import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto my-5">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        <div className="flex flex-col items-center justify-center white-glassmorphism">
          <div>
            <p className="md:text-7xl text-5xl font-serif tracking-widest text-gradient my-5">Hello, I'm</p>
            <p className="md:text-7xl text-4xl font-serif tracking-wider mt-8">Satya Prakash</p>
            <p className="md:text-7xl text-4xl font-serif tracking-wider mb-8">Satyam</p>
            <p className="text-3xl font-serif tracking-wider my-2">Full stack Developer</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="\profile.jpg"
            alt="Profile photo"
            className="object-center object-cover rounded-lg border-2 border-slate-400 border-solid hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
