import React from "react";
import { RWebShare } from "react-web-share";
import { AiOutlineCode, AiOutlineShareAlt } from "react-icons/ai";

const callouts = [
  {
    name: "DevHire",
    description:
      "It basically solves the problem of unemployment and the lack of a connection between job applicants and employer. All similar kind of platform just redirects or notifies the applicant and the rest of the task has to perform by the company. Our application is not only reliable to applicants but the company too",
    imageSrc: "project1.png",
    imageAlt: "DevHire",
    href: "https://github.com/N00Bmaster2810/DevHire",
    stack: ["EJS", "Node.JS", "MongoDB"],
  },
  {
    name: "Document-Dropbox",
    description:
      "Hassle free way to submit your documents to Institute. Often you need to submit documents to the college for various purposes and way of submitting these document was gooogle form which was inefficient;. So it is a simple idea to tackle this problem.",
    imageSrc: "project2.png",
    imageAlt: "Document-Dropbox",
    href: "https://github.com/N00Bmaster2810/Document-Dropbox",
    stack: ["EJS", "Node.JS", "MongoDB"],
  },
  {
    name: "Medicare",
    description:
      "This is web app which help a patient to connect with doctors worldwide and a doctor can also make money through this by engaging with patient all over the world.",
    imageSrc: "project3.png",
    imageAlt: "Medicare",
    href: "https://github.com/pritamp17/Medicare-front_end",
    stack: ["Next.JS", "Node.JS", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <div className="my-5" id="project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <p className="text-6xl font-bold tracking-widest text-gradient pb-5">Projects</p>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 md:gap-6">
            {callouts.map((callout, e) => (
              <div key={e} className="white-glassmorphism p-5">
                <div className="w-full h-full bg-white rounded-lg sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img src={callout.imageSrc} alt={callout.imageAlt} className="w-full cursor-pointer hover:opacity-75 h-full hover:scale-120" />
                </div>
                <p className="mt-6 flex justify-between font-semibold text-gradient my-5 underline">
                  <a target={"_blank"} href={callout.href} className="text-xl" rel="noreferrer">
                    {callout.name}
                  </a>
                  <button className="bg-[#f2e68f] p-2 rounded-lg transition ease-in-out flex justify-between items-center hover:-translate-y-1 hover:scale-105 hover:bg-[#FB9039] duration-300">
                    <a target="_blank" href={callout.href} className="font-semibold text-black" rel="noreferrer">
                      <AiOutlineCode size="2em" className="p-1" fontSize="medium" />
                    </a>
                  </button>
                </p>
                <p className="text-[#f2e68f]">{callout.description}</p>
                <div className="py-3">
                  <p className="text-gradient mb-2">Stack</p>
                  <div className="flex justify-between items-center">
                    <div>
                      {callout.stack.map((st, e) => (
                        <span className="inline-block bg-slate-100 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2" key={e}>
                          # {st}
                        </span>
                      ))}
                    </div>
                    <p className="flex items-center text-[#f2e68f] border rounded-lg p-2 hover:-translate-y-1 hover:scale-105 hover:bg-[#FB9039] duration-300">
                      <AiOutlineShareAlt size="1.5em" color={"action"} className="mr-2" />
                      <RWebShare
                        data={{
                          text: "Hey, checkout this awesome project on GitHub",
                          url: callout.href,
                          title: "Hey, checkout this awesome project on GitHub",
                        }}
                        sites={["facebook", "twitter", "whatsapp", "reddit", "telegram", "linkedin", "mail", "copy"]}
                        onClick={() => console.log("shared successfully!")}
                      >
                        <button>Share</button>
                      </RWebShare>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
