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
import { FaChartLine } from "react-icons/fa";
import { useState } from "react";

interface SkillData {
	text: string;
	x: number;
	y: number;
	icon: React.ReactNode;
}

const skillsData: SkillData[] = [
	// North Direction - Frontend Technologies
	{ text: "Next.js", x: 0, y: -100, icon: <TbBrandNextjs /> },
	{ text: "ReactJs", x: 0, y: -200, icon: <FaReact /> },
	{ text: "TypeScript", x: 0, y: -300, icon: <SiTypescript /> },
	
	// East Direction - Backend Technologies
	{ text: "Node.js", x: 120, y: 0, icon: <FaNodeJs /> },
	{ text: "Express.js", x: 260, y: 0, icon: <SiExpress /> },
	{ text: "Redux", x: 390, y: 0, icon: <ImLoop2 /> },
	
	// South Direction - Databases
	{ text: "MongoDB", x: 0, y: 100, icon: <SiMongodb /> },
	{ text: "PostgreSQL", x: 0, y: 200, icon: <SiPostgresql /> },
	{ text: "MySQL", x: 0, y: 300, icon: <SiMysql /> },
	
	// West Direction - Programming Languages
	{ text: "Python", x: -120, y: 0, icon: <SiPython /> },
	{ text: "Golang", x: -240, y: 0, icon: <SiGo /> },
	{ text: "TailwindCSS", x: -380, y: 0, icon: <SiTailwindcss /> },
	
	// Northeast Direction - DevOps & Infrastructure
	{ text: "Docker", x: 130, y: -100, icon: <FaDocker /> },
	{ text: "Kubernetes", x: 200, y: -200, icon: <SiKubernetes /> },
	{ text: "Terraform", x: 300, y: -300, icon: <SiTerraform /> },
	
	// Southeast Direction - Cloud & Monitoring
	{ text: "AWS", x: 140, y: 100, icon: <FaAws /> },
	{ text: "CI/CD", x: 200, y: 200, icon: <ImLoop2 /> },
	{ text: "Linux", x: 300, y: 300, icon: <SiLinux /> },
	
	// Southwest Direction - AI/ML & Data Science
	{ text: "LangChain", x: -150, y: 100, icon: <FaBrain /> },
	{ text: "Pandas", x: -220, y: 200, icon: <SiPandas /> },
	{ text: "NumPy", x: -300, y: 300, icon: <SiNumpy /> },
	
	// Northwest Direction - Tools & Design
	{ text: "Git", x: -140, y: -100, icon: <FaGitAlt /> },
	{ text: "Figma", x: -200, y: -200, icon: <FaFigma /> },
	{ text: "Postman", x: -300, y: -300, icon: <SiPostman /> },
];

const Skill = ({ text, x, y, icon, animationKey }: { text: string; x: number; y: number; icon: React.ReactNode; animationKey: number }) => {
	return (
		<motion.div
			key={animationKey}
			className="absolute flex justify-center items-center rounded-full font-semibold bg-violet-950 text-white px-4 py-2 shadow-dark cursor-pointer"
			whileHover={{ scale: 1.05 }}
			initial={{ x: 0, y: 0 }}
			animate={{ x: x, y: y }}
			transition={{ duration: 1, ease: "easeOut" }}>
			{icon}
			<span className="mx-2">{text}</span>
		</motion.div>
	);
};

export default function Skills() {
	const [animationKey, setAnimationKey] = useState(0);

	const handleSkillsClick = () => {
		setAnimationKey(prev => prev + 1);
	};

	return (
		<div className="w-full">
			<div className="my-3 text-2xl font-extrabold border-b">Skills</div>
			<div className="w-full h-vh flex items-center justify-center">
				<div className="hidden lg:flex flex-wrap justify-center items-center rounded-full bg-circularLight h-screen">
					<motion.div
						className="flex justify-center items-center rounded-full font-semibold bg-white text-black p-4 px-6 shadow-dark cursor-pointer"
						whileHover={{ scale: 1.05 }}
						onClick={handleSkillsClick}>
						Skills
					</motion.div>
					{/* Organized Mesh Pattern*/}
					{skillsData.map((skill, index) => (
						<Skill
							key={`${animationKey}-${index}`}
							text={skill.text}
							x={skill.x}
							y={skill.y}
							icon={skill.icon}
							animationKey={animationKey}
						/>
					))}
				</div>
			</div>
			<div className="lg:hidden flex flex-wrap gap-4 pb-4">
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<FaReact />
					<span className="mx-2">ReactJs</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<TbBrandNextjs />
					<span className="mx-2">Next.js</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiTailwindcss />
					<span className="mx-2">TailwindCSS</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiTypescript />
					<span className="mx-2">TypeScript</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<FaNodeJs />
					<span className="mx-2">Node.js</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiExpress />
					<span className="mx-2">Express.js</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiMongodb />
					<span className="mx-2">MongoDB</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<FaAws />
					<span className="mx-2">AWS</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<FaDocker />
					<span className="mx-2">Docker</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<ImLoop2 />
					<span className="mx-2">CI/CD</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<FaGitAlt />
					<span className="mx-2">Git</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<FaFigma />
					<span className="mx-2">Figma</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiPostman />
					<span className="mx-2">Postman</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiMysql />
					<span className="mx-2">MySQL</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiPostgresql />
					<span className="mx-2">PostgreSQL</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiPython />
					<span className="mx-2">Python</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiGo />
					<span className="mx-2">Golang</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiKubernetes />
					<span className="mx-2">Kubernetes</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiTerraform />
					<span className="mx-2">Terraform</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<FaBrain />
					<span className="mx-2">LangChain</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiPandas />
					<span className="mx-2">Pandas</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiNumpy />
					<span className="mx-2">NumPy</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<FaChartLine />
					<span className="mx-2">Matplotlib</span>
				</div>
				<div className="bg-[#2c2f3d] p-2 rounded-md flex justify-center items-center">
					<SiLinux />
					<span className="mx-2">Linux</span>
				</div>
			</div>
		</div>
	);
}
