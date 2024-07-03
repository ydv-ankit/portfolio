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
      className="max-w-80 border-[1px] border-gray-800 shadow-lg shadow-zinc-700 duration-200 hover:duration-400 hover:shadow-blue-500 overflow-hidden mt-4"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1 },
      }}>
      <Link target="_blank" to={project.deploy_link}>
        <div className="relative block w-full h-48">
          <img
            src={project.cover ? project.cover : "/assets/projects/template.png"}
            alt={project.title} 
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl hover:underline">{project.title}</div>
          {project.tags.length > 0 && (
            <div className="flex text-blue-400 flex-wrap justify-stretch items-center">
              {project.tags.map((tag, index) => (
                <div key={index} className="border-[1px] border-blue-600 w-fit p-1 text-sm rounded-lg mr-2 m-2">
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
