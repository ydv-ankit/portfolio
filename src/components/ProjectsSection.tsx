import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { project } from "../utils/projects";
import { ProjectCategory } from "../utils/projects";

// Define project categories based on tags
const categories = [
  { id: "all", name: "All Projects", icon: "🚀" },
  { id: ProjectCategory.FRONTEND, name: "Frontend", icon: "🎨" },
  { id: ProjectCategory.BACKEND, name: "Backend", icon: "⚙️" },
  { id: ProjectCategory.AI, name: "AI/ML", icon: "🤖" },
  { id: ProjectCategory.DEVOPS, name: "DevOps", icon: "🐳" },
  { id: ProjectCategory.FULLSTACK, name: "Full Stack", icon: "🌐" },
  { id: ProjectCategory.TOOLS, name: "Tools", icon: "🛠️" },
];

// Category mapping based on project tags or categories array
const projectHasCategory = (project: project, category: string): boolean => {
  if (category === "all") return true;
  if (project.categories && project.categories.length > 0) {
    return project.categories.includes(category as ProjectCategory);
  }
  // fallback to tag-based detection for legacy projects
  const tagString = project.tags.join(" ").toLowerCase();
  switch (category) {
    case ProjectCategory.AI:
      return tagString.includes("ai") || tagString.includes("gemini") || tagString.includes("machine learning") || tagString.includes("python");
    case ProjectCategory.DEVOPS:
      return tagString.includes("docker") || tagString.includes("aws") || tagString.includes("deployment") || tagString.includes("security");
    case ProjectCategory.FULLSTACK:
      return (
        (tagString.includes("react") || tagString.includes("nextjs") || tagString.includes("frontend") || tagString.includes("typescript")) &&
        (tagString.includes("node") || tagString.includes("backend") || tagString.includes("api") || tagString.includes("mongodb") || tagString.includes("postgresql"))
      );
    case ProjectCategory.FRONTEND:
      return tagString.includes("react") || tagString.includes("nextjs") || tagString.includes("frontend") || tagString.includes("typescript");
    case ProjectCategory.BACKEND:
      return tagString.includes("node") || tagString.includes("backend") || tagString.includes("api") || tagString.includes("fastapi");
    case ProjectCategory.TOOLS:
      return tagString.includes("cli") || tagString.includes("tool") || tagString.includes("utility") || tagString.includes("meow") || tagString.includes("pkg");
    default:
      return false;
  }
};

const ProjectsSection = ({ projects }: { projects: project[] }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Filter projects based on category and search term
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(project => 
        projectHasCategory(project, selectedCategory)
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  }, [projects, selectedCategory, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 1300, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter Section */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects by title, description, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-gray-400 text-sm">
          Showing {currentProjects.length} of {filteredProjects.length} projects
          {selectedCategory !== "all" && (
            <span> in {categories.find(c => c.id === selectedCategory)?.name}</span>
          )}
          {totalPages > 1 && (
            <span> (Page {currentPage} of {totalPages})</span>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        {currentProjects.length > 0 ? (
          <motion.div
            key={`${selectedCategory}-${searchTerm}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or category filter
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center items-center gap-2 mt-8"
        >
          {/* Previous Button */}
          <motion.button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
              currentPage === 1
                ? "bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600"
            }`}
            whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
            whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </motion.button>

          {/* Page Numbers */}
          <div className="flex gap-1">
            {[...Array(totalPages).keys()].map((page) => {
              const pageNumber = page + 1;
              const isCurrentPage = currentPage === pageNumber;
              const isNearCurrent = Math.abs(currentPage - pageNumber) <= 1;
              const isFirstOrLast = pageNumber === 1 || pageNumber === totalPages;

              // Show current page, adjacent pages, first and last pages
              if (isCurrentPage || isNearCurrent || isFirstOrLast) {
                return (
                  <motion.button
                    key={page}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-3 py-2 rounded-lg border transition-all duration-300 ${
                      isCurrentPage
                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/25"
                        : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {pageNumber}
                  </motion.button>
                );
              } else if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                // Show ellipsis
                return (
                  <span key={page} className="px-2 py-2 text-gray-500">
                    ...
                  </span>
                );
              }
              return null;
            })}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
              currentPage === totalPages
                ? "bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600"
            }`}
            whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
            whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsSection; 