import { Button, Chip } from "@mui/material";
import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import ShareIcon from "@mui/icons-material/Share";
import { RWebShare } from "react-web-share";

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
    <div className="my-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <p className="text-5xl font-serif tracking-widest text-gradient my-5">Projects</p>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 md:gap-6">
            {callouts.map((callout, e) => (
              <div key={e} className="white-glassmorphism p-5">
                <div className="w-full h-80 bg-white rounded-lg overflow-hidden  sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img src={callout.imageSrc} alt={callout.imageAlt} className="w-full cursor-pointer hover:opacity-75 h-full object-center object-cover" />
                </div>
                <p className="mt-6 flex justify-between font-semibold text-gray-900 my-5">
                  <a target={"_blank"} href={callout.href} className="text-xl" rel="noreferrer">
                    {callout.name}
                  </a>
                  <button className="bg-slate-200 p-2 rounded-lg transition ease-in-out flex justify-betweenitems-center hover:-translate-y-1 hover:scale-105 hover:bg-indigo-200 duration-300">
                    <CodeIcon className="pr-2" fontSize="medium" color="action" />
                    <a target="_blank" href={callout.href} className="no-underline" rel="noreferrer">
                      Visit
                    </a>
                  </button>
                </p>
                <p className="text-base  text-slate-800">{callout.description}</p>
                <div className="py-3">
                  <p className="text-lg pb-3 font-display  font-light">Stack</p>
                  <div className="flex justify-between items-center">
                    <div>
                      {callout.stack.map((st, e) => (
                        <Chip
                          key={e}
                          label={`# ${st}`}
                          variant="outlined"
                          className="inline-block bg-gray-200 bg-opacity-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        />
                      ))}
                    </div>
                    <p>
                      <RWebShare
                        data={{
                          text: "Hey, checkout this awesome project on GitHub",
                          url: callout.href,
                          title: "Hey, checkout this awesome project on GitHub",
                        }}
                        sites={["facebook", "twitter", "whatsapp", "reddit", "telegram", "linkedin", "mail", "copy"]}
                        onClick={() => console.log("shared successfully!")}
                        className="px-2"
                      >
                        <button>Share</button>
                      </RWebShare>
                      <ShareIcon color={"action"} fontSize="small" />
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
