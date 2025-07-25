import { Experience } from "./components/Experience";
import ProjectsSection from "./components/ProjectsSection";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import MagicalCursor from "./components/MagicalCursor";
import { projects } from "./utils/projects";
import { motion } from "framer-motion";

const App = () => {
	return (
		<div className="overflow-hidden cursor-none bg-deep-space min-h-screen">
			<MagicalCursor />
			
			{/* Global Particle Background - Fixed for entire page */}
			<div className="global-particle-bg"></div>
			
			{/* Global Cyber Grid - Fixed for entire page */}
			<div className="global-cyber-grid"></div>
			
			{/* Main Content */}
			<div className="relative z-10 w-full">
				<div className="w-full mx-auto flex flex-col items-center justify-center">
					{/* Profile Section */}
					<Profile />
					
					{/* Experience Section */}
					<motion.section 
						className="min-h-screen py-10 px-6 w-full"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
					>
						<div className="max-w-6xl mx-auto">
							<motion.div
								className="text-center mb-16"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
							>
								<h2 className="text-5xl font-cyber font-black neon-text text-neon-blue mb-4">
									EXPERIENCE
								</h2>
								<div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto"></div>
							</motion.div>
							<Experience />
						</div>
					</motion.section>
				</div>
				
				{/* Projects Section */}
				{projects && (
					<motion.section 
						id="projects-section"
						className="min-h-screen py-10 px-6"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
					>
						<div className="max-w-7xl mx-auto">
							<motion.div
								className="text-center mb-16"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
							>
								<h2 className="text-5xl font-cyber font-black neon-text text-neon-blue mb-4">
									PROJECTS
								</h2>
								<div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto"></div>
							</motion.div>
							<ProjectsSection projects={projects} />
						</div>
					</motion.section>
				)}

				{/* Skills Section */}
				<motion.section 
					className="min-h-screen py-20 px-6"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					<div className="max-w-6xl mx-auto">
						<motion.div
							className="text-center mb-16"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h2 className="text-5xl font-cyber font-black neon-text text-neon-blue mb-4">
								SKILLS
							</h2>
							<div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto"></div>
						</motion.div>
						<Skills />
					</div>
				</motion.section>

			</div>
			<Footer />
		</div>
	);
};

export default App;
