import { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavbarItem = ({ title, classProps, link }) => {
  return (
    <a href={link} className={`mx-4 cursor-pointer btn-grad transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 ${classProps} p-2`}>
      <btn>{title}</btn>
    </a>
  );
};

const navs = [
  { title: "About Me", link: "#about" },
  { title: "Projects", link: "#project" },
  { title: "Contact Me", link: "#contact" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex md:justify-center justify-between items-center p-4 gradient-bg-welcome">
      <div className="flex md:flex-[0.5] flex-initial justify-start space-x-5 text-gradient">
        <a href={"/"}>
          <Image src="/avatar.png" width={64} height={64} alt="logo" className="w-32 cursor-pointer rounded-full" />
        </a>
      </div>
      <div className="flex md:hidden md:justify-center justify-start text-gray-900">
        <a href={"/"}>
          <p className="text-2xl text-white antialiased hover:subpixel-antialiased cursor-pointer">Portfolio</p>
        </a>
      </div>
      <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navs.map((item, index) => (
          <NavbarItem key={index} classProps={"text-white"} title={item.title} link={item.link} />
        ))}
        <a
          href="\resume.pdf"
          download
          className={`mx-4 cursor-pointer text-white btn-grad transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 p-2`}
        >
          <btn>Get Resume</btn>
        </a>
      </ul>
      <div className="flex-relative">
        {toggleMenu ? (
          <AiOutlineClose size="2" className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        ) : (
          <AiOutlineMenu size="1.5em" className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose className="cursor-pointer" onClick={() => setToggleMenu(false)} />
            </li>
            {navs.map((item, index) => (
              <NavbarItem key={item + index} title={item.title} link={item.link} classProps="my-2 text-lg " />
            ))}
            <a
              href="\resume.pdf"
              download
              className={`mx-4 cursor-pointer text-white btn-grad transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 p-2 my-2 text-lg`}
            >
              <btn>Get Resume</btn>
            </a>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
