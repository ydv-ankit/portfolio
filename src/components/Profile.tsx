"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiAt } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

const Profile = () => {
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
        <div className="text-4xl font-bold m-2">Ankit Yadav</div>
        <div className="text-xl font-bold m-1">Web Developer</div>
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
        <div className="mt-8 text-xl text-blue-100">
          Full Stack Dev🔥 | turning data into stories
        </div>
        <div className="flex md:flex-row flex-col">
          <button className="bg-blue-800 border-none outline-none px-4 py-2 rounded-md m-2 mx-4">
            <Link href={"/"}>Resume</Link>
          </button>
          <button className="bg-blue-800 border-none outline-none px-4 py-2 rounded-md m-2">
            <Link href={"mailto:ankityadav11241@gmail.com"}>Hire Me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
