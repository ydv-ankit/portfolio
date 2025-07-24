import { motion } from "framer-motion";
import { ProjectType } from "../types";
import { cn } from "../lib/utils";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <motion.div
      className="group relative bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 h-[520px] flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden flex-shrink-0 h-48">
        <motion.img
          src={project.cover ? project.cover : "/assets/projects/template.png"}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col min-h-0">
        {/* Title */}
        <a
          href={project?.deploy_link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block group/title"
        >
          <motion.h3 
            className="text-xl font-bold text-white mb-3 group-hover/title:text-blue-400 transition-colors duration-300 line-clamp-2 overflow-hidden"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>
        </a>

        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
            {project.tags.slice(0, 4).map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium bg-gray-600/20 text-gray-400 border border-gray-600/30 rounded-full">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className={cn("text-gray-300 text-sm line-clamp-4 overflow-hidden leading-relaxed flex-shrink-0 mb-4", project.title.length > 20 && "line-clamp-3")}>
          {project.desc}
        </p>

        {/* Bottom Section - View Project Button and Code Links */}
        <div className="mt-auto pt-4 border-t border-gray-800 flex-shrink-0">
          <div className="flex items-center justify-between">
            <a
              href={project?.deploy_link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
            >
              <span>View Project</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </motion.svg>
            </a>
            
            {/* Code Links */}
            {project.code_links && project.code_links.length > 0 && (
              <div className="flex gap-2">
                {project.code_links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200 text-lg"
                    title={link.label + ' Code'}
                  >
                    <span>{link.icon}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
