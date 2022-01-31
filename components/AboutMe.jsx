import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { LinkedIn, FacebookOutlined, Twitter, GitHub, Instagram } from "@mui/icons-material";

const Btn = ({ href, Icon }) => {
  return (
    <a href={href} target={"_blank"} rel="noreferrer">
      <Button>
        <Icon />
      </Button>
    </a>
  );
};

const social = [
  {
    href: "https://www.linkedin.com/in/satyaprakashsatyam/",
    icon: LinkedIn,
    key: "one",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100055258875692",
    icon: FacebookOutlined,
    key: "two",
  },
  {
    href: "https://twitter.com/itsme_satty",
    icon: Twitter,
    key: "three",
  },
  {
    href: "https://github.com/N00Bmaster2810",
    icon: GitHub,
    key: "four",
  },
  {
    href: "https://www.instagram.com/its_me.satya/",
    icon: Instagram,
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
        <p className="text-5xl font-serif tracking-widest text-[#F52D04] my-5">About Me</p>
        <p className="font-body text-base md:text-xl tracking-wide my-4">
          I am a web developer that comes from a teaching and <span className="font-extrabold text-light-accent dark:text-d-accent">Business background</span> .
          Through my past experiences, I can balance the need of users and businesses to understand their pain points and how I can contribute as a{" "}
          <span className="font-extrabold text-light-accent dark:text-d-accent">Front-end developer</span> and solve their problems.
        </p>
        <p className="font-body text-base md:text-xl tracking-wide mb-3">
          I have worked with a wide range of people from different backgrounds and demographics. This has enabled me to adapt and become
          <span className="font-extrabold text-light-accent dark:text-d-accent ">flexible</span> in the workplace.
        </p>
        <p className="font-body text-base md:text-xl tracking-wide mb-3 flex justify-center items-center  hover:shadow-2xl rounded-lg border-indigo-400 border-2 p-3">
          <span className="font-bold text-light-accent dark:text-d-accent px-4">Follow me on:</span>
          <ButtonGroup variant="contained" color="warning" aria-label="outlined warning button group">
            {social.map((e, i) => (
              <Btn href={e.href} Icon={e.icon} key={i} />
            ))}
          </ButtonGroup>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
