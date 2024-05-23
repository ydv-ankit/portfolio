"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiAt } from "react-icons/ci";

const Profile = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 lg:rounded-3xl"
        style={{
          background: `url("/bg6.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7) ",
        }}></div>
      <div className="relative flex flex-col items-center justify-center min-h-[30rem] py-24">
        <img
          className="w-48 h-48 rounded-full border-4 border-blue-200"
          src="/profile.jpeg"
          alt="profile pic"
        />
        <div className="text-4xl font-bold m-2">Ankit Yadav</div>
        <div className="text-xl font-bold m-1">Web Developer</div>
        <div className="flex mt-2">
          <a href="" className="text-2xl mx-2">
            <CiAt className="text-blue-200" />
          </a>
          <a href="" className="text-2xl mx-2">
            <FaLinkedin className="text-blue-200" />
          </a>
          <a href="" className="text-2xl mx-2">
            <FaGithub className="text-blue-200" />
          </a>
          <a href="" className="text-2xl mx-2">
            <FaXTwitter className="text-blue-200" />
          </a>
        </div>
        <div className="mt-8 text-xl text-blue-100">Bio for me</div>
        <div className="">
          <button className="bg-blue-800 border-none outline-none m-8 px-4 py-2 rounded-md">Resume</button>
          <button className="bg-blue-800 border-none outline-none m-8 px-4 py-2 rounded-md">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
