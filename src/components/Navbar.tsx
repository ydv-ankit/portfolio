"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed inset-x-0 bg-[#21263d] z-40">
      <div className="hidden lg:flex relative w-3/5 mx-auto justify-between items-center text-white">
        <div className="cursor-pointer">
          <Link href={"/"}>
            <Image
              src="/assets/img/ankitydv.png"
              width={110}
              height={5}
              alt="logo"
            />
          </Link>
        </div>
        <ul className="flex items-center justify-center">
          <Link href={"#projects"}>
            <li className="p-2 m-2 cursor-pointer font-medium hover:text-blue-500 rounded-md">
              Projects
            </li>
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/1ss54JrfSdwjOeHotoXudanc_m6Hj_lAg/view?usp=sharing"
            }
            target="_blank">
            <li className="p-2 m-2 cursor-pointer font-medium hover:text-blue-500 rounded-md">
              Resume
            </li>
          </Link>
          <Link href={"#skills"}>
            <li className="p-2 m-2 cursor-pointer font-medium hover:text-blue-500 rounded-md">
              Skills
            </li>
          </Link>
          <Link href={"https://heyankit.hashnode.dev"} target="_blank">
            <li className="p-2 m-2 cursor-pointer font-medium hover:text-blue-500 rounded-md">
              Blogs
            </li>
          </Link>
          <Link href={"https://github.com/ydv-ankit"} target="_blank">
            <li className="p-2 m-2 cursor-pointer font-medium flex items-center justify-center rounded-md hover:text-blue-500">
              <FaGithub /> <span className="mx-2">GitHub</span>
            </li>
          </Link>
        </ul>
      </div>
      {/* for small screen */}
      <div className="flex lg:hidden justify-between items-center text-white">
        <div className="m-2 p-2 font-bold text-xl cursor-pointer">
          Ankit Ydv
        </div>
        <ul className="flex items-center justify-center">
          <div className="p-2 cursor-pointer">
            <Link href={"https://github.com/ydv-ankit"} target="_blank">
              <FaGithub />
            </Link>
          </div>
          <div className="p-2 cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </ul>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-[#21263d] text-white shadow-lg">
          <ul className="flex flex-col items-center">
            <li className="p-2 m-2 cursor-pointer font-medium hover:text-blue-500 rounded-md">
              <Link href={"#projects"}>Projects</Link>
            </li>
            <li className="p-2 m-2 cursor-pointer font-medium hover:text-blue-500 rounded-md">
              <Link href={"#skills"}>Skills</Link>
            </li>

            <li className="p-2 m-2 cursor-pointer font-medium hover:text-blue-500 rounded-md">
              <Link href={"/"}>Resume</Link>
            </li>
            <li className="p-2 m-2 cursor-pointer font-medium hover:text-blue-500 rounded-md">
              <Link href={"https://heyankit.hashnode.dev"} target="_blank">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
