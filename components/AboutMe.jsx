import React from "react";
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

const Btn = ({ href, Icon }) => {
  return (
    <a href={href} target={"_blank"} rel="noreferrer" className="p-2 hover:bg-[#F52D04] hover:rounded-lg">
      <btn className="">
        <Icon size="1.5em" />
      </btn>
    </a>
  );
};

const social = [
  {
    href: "https://www.linkedin.com/in/satyaprakashsatyam/",
    icon: AiFillLinkedin,
    key: "one",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100055258875692",
    icon: AiFillFacebook,
    key: "two",
  },
  {
    href: "https://twitter.com/itsme_satty",
    icon: AiFillTwitterCircle,
    key: "three",
  },
  {
    href: "https://github.com/N00Bmaster2810",
    icon: AiOutlineGithub,
    key: "four",
  },
  {
    href: "https://www.instagram.com/its_me.satya/",
    icon: AiOutlineInstagram,
    key: "five",
  },
];

const AboutMe = () => {
  return (
    <div className="flex flex-col  md:flex-col lg:flex-row md:p-8 rounded-md items-center" id="about">
      <div className="w-full  md:w-3/4 lg:w-2/4 md:mx-auto p-6 md:p-6 ">
        <div>
          <img alt="about-me picture" src="\about-me.svg" className="rounded-2xl filter" />
        </div>
      </div>
      <div className="w-full md:w-4/4 flex flex-col justify-between items-center lg:w-2/4 p-2 md:p-6 ">
        <p className="text-5xl font-semibold tracking-widest text-gradient my-5">About Me</p>
        <p className="font-body text-[#f2e68f] md:text-xl tracking-wide my-4">
          I am a pre-final student at MNNIT Allahabad. I have a huge knack towards making and creating full stack websites, solving daily life problems and
          heavy inclination towards data structures and algorithms too.
        </p>
        <p className="font-body text-[#f2e68f] md:text-xl tracking-wide mb-3">
          I have worked with a wide range of people from different backgrounds and demographics. This has enabled me to adapt and become
          <span className="font-extrabold text-light-accent dark:text-d-accent "> flexible</span> in the workplace.
        </p>
        <p className="font-body text-[#f2e68f] md:text-xl tracking-wide mb-3 flex justify-center items-center  hover:shadow-2xl rounded-lg border-indigo-400 border-2 p-3">
          <span className="font-bold text-light-accent dark:text-d-accent px-4">Follow me on:</span>
          <div className="flex justify-center place-content-stretch">
            {social.map((e, i) => (
              <Btn href={e.href} Icon={e.icon} key={i} />
            ))}
          </div>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
