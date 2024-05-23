"use client";
import Profile from "@/components/Profile";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Chat App",
    cover: "https://harisheoran.xyz/projects/opsdock/featured.png",
    tags: ["aws", "nodejs", "reactjs"],
    desc: "a brief about this project details dnj,fha kdlfhsdjnf kdfbsajhbf sjbdjfbdbvnsdb ,bdsvbndsbvb",
  },
  {
    title: "Chat App",
    cover: "https://harisheoran.xyz/projects/opsdock/featured.png",
    tags: ["aws", "nodejs", "reactjs"],
    desc: "a brief about this project details",
  },
  {
    title: "Chat App",
    cover: "https://harisheoran.xyz/projects/opsdock/featured.png",
    tags: ["aws", "nodejs", "reactjs"],
    desc: "a brief about this project details",
  },
  {
    title: "Chat App",
    cover: "https://harisheoran.xyz/projects/opsdock/featured.png",
    tags: ["aws", "nodejs", "reactjs"],
    desc: "a brief about this project details",
  },
  {
    title: "Chat App",
    cover: "https://harisheoran.xyz/projects/opsdock/featured.png",
    tags: ["aws", "nodejs", "reactjs"],
    desc: "a brief about this project details",
  },
  {
    title: "Chat App",
    cover: "https://harisheoran.xyz/projects/opsdock/featured.png",
    tags: ["aws", "nodejs", "reactjs"],
    desc: "a brief about this project details",
  },
  {
    title: "Chat App",
    cover: "https://harisheoran.xyz/projects/opsdock/featured.png",
    tags: ["aws", "nodejs", "reactjs"],
    desc: "a brief about this project details",
  },
];

const page = () => {
  return (
    <div className="bg-[#21263d] w-full">
      <div className="lg:w-3/5 w-[95vw] mx-auto min-h-screen text-white">
        <div className="h-32"></div>
        <Profile />
        {projects && (
          <div className="mt-8">
            <div className="my-8 text-2xl font-extrabold">Projects</div>
            <section className="w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
