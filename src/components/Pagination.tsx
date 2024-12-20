import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { project } from "../utils/projects";

const ProjectsSection = ({ projects }: { projects: project[] }) => {
  const projectsPerPage = 4;

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section className="sm:block w-full grid gap-4 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 p-2 sm:p-0">
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        {/* Page Number Buttons */}
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page + 1)}
            className={`px-4 py-2 ${
              currentPage === page + 1
                ? "bg-blue-800 text-white"
                : "bg-blue-500 hover:bg-blue-800"
            } rounded-md mr-2`}>
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
