"use client";

import Link from "next/link";

export default function ProjectCard({
  project,
}: {
  project: { title: string; cover: string; tags: string[]; desc: string };
}) {
  return (
    <Link
      href={"/"}
      className="min-w-full border-[1px] border-gray-800 shadow-lg shadow-zinc-700 hover:scale-105 duration-200 hover:duration-400 hover:shadow-slate-300 overflow-hidden">
      <img src={project.cover} alt="" className="w-full h-48 overflow-hidden" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl hover:underline">{project.title}</div>
        {project.tags.length > 0 && (
          <div className="flex text-blue-400">
            {project.tags.map((tag, index) => (
              <div
                key={index}
                className="border-[1px] border-blue-600 w-fit p-1 text-sm rounded-lg mr-2">
                {tag}
              </div>
            ))}
          </div>
        )}
        <div>{project.desc}</div>
      </div>
    </Link>
  );
}
