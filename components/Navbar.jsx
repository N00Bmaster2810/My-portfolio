import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
const NavbarItem = ({ title, classProps, link }) => {
  return (
    <Button
      className={`mx-4 cursor-pointer btn-grad transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 ${classProps}`}
    >
      <Link href={link}>{title}</Link>
    </Button>
  );
};

const navs = [
  { title: "About Me", link: "/aboutme" },
  { title: "Resume", link: "/getResume" },
  { title: "Projects", link: "/projects" },
  { title: "Contact Me", link: "/contact" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex md:justify-center justify-between items-center p-4 gradient-bg-welcome">
      <div className="flex md:flex-[0.5] flex-initial justify-start space-x-5 text-gradient">
        <Link href={"/"}>
          <Image src="/avatar.png" width={64} height={64} alt="logo" className="w-32 cursor-pointer rounded-full" />
        </Link>
      </div>
      <div className="flex md:hidden md:justify-center justify-start text-gray-900">
        <Link href={"/"}>
          <p className="text-2xl text-white antialiased hover:subpixel-antialiased cursor-pointer">Portfolio</p>
        </Link>
      </div>
      <ul className="md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navs.map((item, index) => (
          <NavbarItem key={index} classProps={"text-white"} title={item.title} link={item.link} />
        ))}
      </ul>
      <div className="flex-relative">
        {toggleMenu ? (
          <CloseIcon className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        ) : (
          <MenuIcon className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <CloseIcon className="cursor-pointer" onClick={() => setToggleMenu(false)} />
            </li>
            {navs.map((item, index) => (
              <NavbarItem key={item + index} title={item.title} link={item.link} classProps="my-2 text-lg " />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
