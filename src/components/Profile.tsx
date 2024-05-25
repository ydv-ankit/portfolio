"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiAt } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import Typed from "typed.js";
import React from "react";

const Profile = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>MERN Developer</i>",
        "<i>ReactJs</i> Developer",
        "Full Stack Developer",
        "<i>NodeJs</i> Developer",
      ],
      typeSpeed: 60,
      loop: true,
      backSpeed: 40,
      backDelay: 300,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 lg:rounded-3xl"
        style={{
          background: `url("/assets/img/profile_bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7) ",
        }}></div>
      <div className="relative flex flex-col items-center justify-center min-h-[30rem] py-24">
        <Image
          width={192}
          height={192}
          className="rounded-full border-4 border-blue-200"
          src="/assets/img/profile.jpeg"
          alt="profile pic"
        />
        <div className="text-4xl font-bold m-2 relative">Ankit Yadav</div>
        <div className="text-2xl font-bold m-2">
          <span ref={el} />
        </div>
        <div className="flex mt-2">
          <Link
            href="mailto:ankityadav11241@gmail.com"
            className="text-2xl mx-2">
            <CiAt className="text-blue-200" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ankityadav1121"
            className="text-2xl mx-2"
            target="_blank">
            <FaLinkedin className="text-blue-200" />
          </Link>
          <Link
            href="https://github.com/ydv-ankit"
            className="text-2xl mx-2"
            target="_blank">
            <FaGithub className="text-blue-200" />
          </Link>
          <Link
            href="https://x.com/ydvtwts"
            className="text-2xl mx-2"
            target="_blank">
            <FaXTwitter className="text-blue-200" />
          </Link>
        </div>
        <div className="mt-4 mb-4 text-xl text-blue-100">
          turning data into stories 🔥
        </div>
        <div className="flex md:flex-row flex-col">
          <button className="bg-slate-500 bg-opacity-30 border-x border-y outline-none px-4 py-2 rounded-md m-2 hover:bg-white duration-100 hover:duration-300 hover:text-blue-600 font-semibold">
            <Link href={"/"}>Resume</Link>
          </button>
          <button className="bg-slate-500 bg-opacity-30 border-x border-y outline-none px-4 py-2 rounded-md m-2 hover:bg-white duration-100 hover:duration-300 hover:text-blue-600 font-semibold">
            <Link href={"mailto:ankityadav11241@gmail.com"}>Hire Me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
