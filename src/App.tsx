import ProjectsSection from "./components/Pagination";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import { projects } from "./utils/projects";
import { motion } from "framer-motion";

const App = () => {
	return (
		<div className="bg-[#21263d] overflow-hidden">
			<div className="lg:w-3/5 w-[95vw] mx-auto min-h-screen text-white">
				<div className="h-32"></div>
				<Profile />
				{projects && (
					<div className="mt-8 pb-4">
						<motion.div
							className="my-4 text-2xl font-extrabold"
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}>
							Projects
						</motion.div>
						<ProjectsSection projects={projects} />
					</div>
				)}
				<Skills />
			</div>
		</div>
	);
};

export default App;
