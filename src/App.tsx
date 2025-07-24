import { Experience } from "./components/Experience";
import ProjectsSection from "./components/ProjectsSection";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import MagicalCursor from "./components/MagicalCursor";
import { projects } from "./utils/projects";
import { motion } from "framer-motion";

const App = () => {
	return (
		<div className="overflow-hidden cursor-none">
			<MagicalCursor />
			<div className="lg:w-3/5 w-[95vw] mx-auto min-h-screen text-white">
				<div className="h-32"></div>
				<Profile />
				<div>
					<Experience />
				</div>
				{projects && (
					<div className="mt-8 pb-4">
						<motion.div
							className="my-4 text-2xl font-extrabold border-b"
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
