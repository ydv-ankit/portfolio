import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({
  project,
}: {
  project: {
    title: string;
    cover: string;
    tags: string[];
    desc: string;
    code_link: string;
    deploy_link: string;
  };
}) {
  return (
    <motion.div
      className="w-80 relative sm:w-full border-[1px] border-gray-800 shadow-lg shadow-zinc-700 duration-200 hover:duration-400 hover:shadow-blue-500 overflow-hidden mt-4"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1 },
      }}>
      {project?.code_link?.length !== 0 ? (
        <Link
          target="_blank"
          to={project?.code_link || "#"}
          className="sm:flex">
          <div className="absolute -top-4 -right-10 z-10 origin-center rotate-45 bg-blue-600 w-24 h-14 flex place-items-end justify-center cursor-pointer hover:scale-125">
            <img
              src="/assets/img/github.png"
              alt="code"
              className="h-6 w-6 mb-1"
            />
          </div>
        </Link>
      ) : (
        <></>
      )}
      <Link
        target="_blank"
        to={project?.deploy_link || "#"}
        className="sm:flex">
        <div className="relative block w-80 h-42 flex-0">
          <img
            src={
              project.cover ? project.cover : "/assets/projects/template.png"
            }
            alt={project.title}
            className="w-full h-full object-fill rounded-md"
          />
        </div>
        <div className="px-6 py-4 w-full flex-2">
          <div className="font-bold text-xl hover:underline">
            {project.title}
          </div>
          {project.tags.length > 0 && (
            <div className="flex text-blue-400 flex-wrap justify-stretch items-center">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="border-[1px] border-blue-600 w-fit p-1 text-sm rounded-lg mr-2 my-2">
                  {tag}
                </div>
              ))}
            </div>
          )}
          <div className="text-justify my-2">{project.desc}</div>
        </div>
      </Link>
    </motion.div>
  );
}
