"use client";
import Profile from "@/components/Profile";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utils/projects";

const page = () => {
  return (
    <div className="bg-[#21263d] w-full">
      <div className="lg:w-3/5 w-[95vw] mx-auto min-h-screen text-white">
        <div className="h-32"></div>
        <Profile />
        {projects && (
          <div className="mt-8" id="projects">
            <div className="my-4 text-2xl font-extrabold">Projects</div>
            <section className="w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 px-2">
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
