import { SiMysql, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { ImLoop2 } from "react-icons/im";
import { motion } from "framer-motion";
import { FaFigma } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiGo } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { useState } from "react";

interface SkillData {
	text: string;
	x: number;
	y: number;
	icon: React.ReactNode;
	category: string;
	color: string;
}

const skillsData: SkillData[] = [
	// Frontend Technologies
	{ text: "Next.js", x: 0, y: -100, icon: <TbBrandNextjs />, category: "Frontend", color: "neon-blue" },
	{ text: "ReactJs", x: 0, y: -200, icon: <FaReact />, category: "Frontend", color: "neon-cyan" },
	{ text: "TypeScript", x: 0, y: -300, icon: <SiTypescript />, category: "Frontend", color: "neon-blue" },
	
	// Backend Technologies
	{ text: "Node.js", x: 140, y: 0, icon: <FaNodeJs />, category: "Backend", color: "neon-green" },
	{ text: "Express.js", x: 290, y: 0, icon: <SiExpress />, category: "Backend", color: "neon-green" },
	{ text: "Redux", x: 430, y: 0, icon: <ImLoop2 />, category: "Backend", color: "neon-purple" },
	
	// Databases
	{ text: "MySQL", x: 0, y: 100, icon: <SiMysql />, category: "Database", color: "neon-cyan" },
	{ text: "MongoDB", x: 0, y: 200, icon: <SiMongodb />, category: "Database", color: "neon-green" },
	{ text: "PostgreSQL", x: 0, y: 300, icon: <SiPostgresql />, category: "Database", color: "neon-blue" },
	
	// Programming Languages
	{ text: "Python", x: -140, y: 0, icon: <SiPython />, category: "Language", color: "neon-green" },
	{ text: "Golang", x: -270, y: 0, icon: <SiGo />, category: "Language", color: "neon-cyan" },
	{ text: "TailwindCSS", x: -420, y: 0, icon: <SiTailwindcss />, category: "Frontend", color: "neon-blue" },
	
	// DevOps & Infrastructure
	{ text: "Docker", x: 150, y: -100, icon: <FaDocker />, category: "DevOps", color: "neon-blue" },
	{ text: "Kubernetes", x: 200, y: -200, icon: <SiKubernetes />, category: "DevOps", color: "neon-blue" },
	{ text: "Terraform", x: 300, y: -300, icon: <SiTerraform />, category: "DevOps", color: "neon-purple" },
	
	// Cloud & Monitoring
	{ text: "AWS", x: 140, y: 100, icon: <FaAws />, category: "Cloud", color: "neon-orange" },
	{ text: "CI/CD", x: 200, y: 200, icon: <ImLoop2 />, category: "DevOps", color: "neon-green" },
	{ text: "Linux", x: 300, y: 300, icon: <SiLinux />, category: "DevOps", color: "neon-green" },
	
	// AI/ML & Data Science
	{ text: "LangChain", x: -150, y: 100, icon: <FaBrain />, category: "AI/ML", color: "neon-pink" },
	{ text: "Pandas", x: -220, y: 200, icon: <SiPandas />, category: "AI/ML", color: "neon-blue" },
	{ text: "NumPy", x: -300, y: 300, icon: <SiNumpy />, category: "AI/ML", color: "neon-cyan" },
	
	// Tools & Design
	{ text: "Git", x: -140, y: -100, icon: <FaGitAlt />, category: "Tools", color: "neon-orange" },
	{ text: "Figma", x: -200, y: -200, icon: <FaFigma />, category: "Design", color: "neon-pink" },
	{ text: "Postman", x: -300, y: -300, icon: <SiPostman />, category: "Tools", color: "neon-orange" },
];

const Skill = ({ text, x, y, icon, animationKey, color }: { text: string; x: number; y: number; icon: React.ReactNode; animationKey: number; color: string }) => {
	return (
		<motion.div
			key={animationKey}
			className={`absolute flex justify-center items-center rounded-full font-tech glass border border-${color}/30 text-${color} px-4 py-2 shadow-lg cursor-pointer group`}
			whileHover={{ 
				scale: 1.1,
				boxShadow: `0 0 20px rgba(0, 212, 255, 0.5)`
			}}
			initial={{ x: 0, y: 0, opacity: 0 }}
			animate={{ x: x, y: y, opacity: 1 }}
			transition={{ duration: 1.5, ease: "easeOut" }}
		>
			<div className="text-xl group-hover:scale-110 transition-transform duration-300">
				{icon}
			</div>
			<span className="mx-2 font-medium group-hover:neon-text transition-all duration-300">{text}</span>
		</motion.div>
	);
};

export default function Skills() {
	const [animationKey, setAnimationKey] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState("all");

	const handleSkillsClick = () => {
		setAnimationKey(prev => prev + 1);
	};

	const filteredSkills = selectedCategory === "all" 
		? skillsData 
		: skillsData.filter(skill => skill.category === selectedCategory);

	const categories = ["all", "Frontend", "Backend", "Database", "Language", "DevOps", "Cloud", "AI/ML", "Tools", "Design"];

	return (
		<motion.div 
			className="w-full relative"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			{/* Background Glow */}
			<div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 rounded-2xl blur-3xl"></div>
			
			{/* Main Container */}
			<div className="relative glass-strong rounded-2xl p-8 border border-neon-blue/20">
				{/* Header */}
				<motion.div 
					className="text-center mb-8"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-cyber font-bold text-neon-blue neon-text mb-4">
						TECHNICAL SKILLS
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-6"></div>
					
					{/* Category Filters */}
					<div className="flex flex-wrap justify-center gap-2">
						{categories.map((category) => (
							<motion.button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-3 py-1 rounded-full border transition-all duration-300 font-tech text-xs ${
									selectedCategory === category
										? "glass-strong border-neon-blue text-neon-blue neon-text"
										: "glass border-neon-blue/30 text-neon-blue/70 hover:border-neon-blue hover:text-neon-blue"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{category === "all" ? "ALL" : category.toUpperCase()}
							</motion.button>
						))}
					</div>
				</motion.div>

				{/* Skills Orbit */}
				<div className="hidden lg:flex w-full h-[600px] items-center justify-center relative">
					{/* Center Core */}
					<motion.div
						className="flex justify-center items-center rounded-full glass-strong border-2 border-neon-blue p-6 cursor-pointer relative z-10"
						whileHover={{ 
							scale: 1.1,
							boxShadow: "0 0 30px rgba(0, 212, 255, 0.8)"
						}}
						onClick={handleSkillsClick}
						animate={{ 
							boxShadow: [
								"0 0 20px rgba(0, 212, 255, 0.5)",
								"0 0 40px rgba(0, 212, 255, 0.8)",
								"0 0 20px rgba(0, 212, 255, 0.5)"
							]
						}}
						transition={{ 
							boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
						}}
					>
						<div className="text-neon-blue font-cyber font-bold text-lg neon-text">
							SKILLS
						</div>
					</motion.div>

					{/* Skills Orbiting */}
					{filteredSkills.map((skill, index) => (
						<Skill
							key={`${animationKey}-${index}`}
							text={skill.text}
							x={skill.x}
							y={skill.y}
							icon={skill.icon}
							animationKey={animationKey}
							color={skill.color}
						/>
					))}

					{/* Floating Particles */}
					<div className="absolute top-10 left-10 w-2 h-2 bg-neon-pink rounded-full animate-float"></div>
					<div className="absolute top-20 right-20 w-1 h-1 bg-neon-cyan rounded-full animate-pulse-neon"></div>
					<div className="absolute bottom-20 left-20 w-3 h-3 bg-neon-green rounded-full animate-float"></div>
					<div className="absolute bottom-10 right-10 w-2 h-2 bg-neon-purple rounded-full animate-pulse-neon"></div>
				</div>

				{/* Mobile Skills Grid */}
				<div className="lg:hidden mt-8">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						{filteredSkills.map((skill, index) => (
							<motion.div
								key={index}
								className="glass rounded-lg p-4 border border-neon-blue/20 flex flex-col items-center gap-2 group"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ 
									scale: 1.05,
									boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)"
								}}
							>
								<div className={`text-2xl text-${skill.color} group-hover:scale-110 transition-transform duration-300`}>
									{skill.icon}
								</div>
								<span className="text-sm font-tech text-gray-300 text-center group-hover:text-neon-cyan transition-colors duration-300">
									{skill.text}
								</span>
							</motion.div>
						))}
					</div>
				</div>

				{/* Bottom Accent */}
				<motion.div 
					className="mt-20 text-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="inline-flex items-center gap-2 text-neon-blue/70 font-tech text-sm">
						<span>// MASTERING THE DIGITAL FRONTIER</span>
						<div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}
