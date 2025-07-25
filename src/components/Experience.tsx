import { FaRocket, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const experienceData = [
	{
		title: "Backend & DevOps Engineer",
		company: "WeVoice News",
		period: "August 2024 - Present",
		icon: <FaRocket className="text-xl" />,
		description: "Leading backend development and DevOps infrastructure for a cutting-edge news platform",
		skills: ["Backend Development", "DevOps & Infrastructure", "System Architecture", "Cloud Deployment", "API Design"],
		color: "neon-blue",
		status: "active"
	},
	{
		title: "Frontend Developer",
		company: "University Website",
		period: "August 2023 - May 2024",
		icon: <FaPalette className="text-xl" />,
		description: "Developed responsive and modern user interfaces for university web applications",
		skills: ["React & TypeScript", "UI/UX Design", "Responsive Development", "State Management", "Performance Optimization"],
		color: "neon-cyan",
		status: "completed"
	},
];

export const Experience = () => {
	return (
		<motion.div 
			className="relative w-full"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			viewport={{ once: true }}
		>
			{/* Background Glow */}
			<div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5 rounded-2xl blur-3xl"></div>
			
			{/* Main Container */}
			<div className="relative glass-strong rounded-2xl p-4 md:p-8 border border-neon-blue/20">
				{/* Header */}
				<motion.div 
					className="text-center mb-8 md:mb-12"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-4xl font-cyber font-bold text-neon-blue neon-text mb-4">
						EXPERIENCE TIMELINE
					</h2>
					<div className="w-20 md:w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-4"></div>
					<p className="text-neon-cyan/80 font-futura text-base md:text-lg">
						Journey Through Digital Innovation
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* Desktop: Central Timeline Line */}
					<div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-cyan to-neon-purple transform -translate-x-1/2 z-10"></div>
					
					{/* Mobile: Left Timeline Line */}
					<div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-cyan to-neon-purple"></div>
					
					{/* Timeline Items */}
					<div className="space-y-8 lg:space-y-16">
						{experienceData.map((item, index) => (
							<motion.div
								key={index}
								className={`relative flex items-center ${
									// Mobile: Always vertical layout
									// Desktop: Alternating layout
									'lg:flex-row' + (index % 2 === 0 ? '' : ' lg:flex-row-reverse')
								}`}
								initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: index * 0.3 }}
								viewport={{ once: true }}
							>
								{/* Content Card */}
								<div className={`flex-1 ${
									// Mobile: Always left padding for timeline
									// Desktop: Alternating padding
									'pl-12 lg:pr-8' + (index % 2 === 0 ? '' : ' lg:pl-8 lg:pr-0')
								}`}>
									<motion.div 
										className="glass rounded-2xl p-4 lg:p-6 border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-500 group relative overflow-hidden"
										whileHover={{ 
											scale: 1.02,
											boxShadow: "0 20px 40px rgba(0, 212, 255, 0.2)"
										}}
									>
										{/* Holographic Overlay */}
										<div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
										
										{/* Content */}
										<div className="relative z-10">
											{/* Header */}
											<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-2">
												<div>
													<h3 className={`text-xl md:text-2xl font-cyber font-bold text-${item.color} neon-text mb-2`}>
														{item.title}
													</h3>
													<p className="text-neon-cyan font-futura text-base lg:text-lg font-semibold mb-1">
														{item.company}
													</p>
													<p className="text-neon-blue/70 font-tech text-sm">
														{item.period}
													</p>
												</div>
												
												{/* Status Badge */}
												<div className={`px-3 py-1 rounded-full text-xs font-tech border w-fit ${
													item.status === 'active' 
														? 'bg-neon-green/10 text-neon-green border-neon-green/30' 
														: 'bg-neon-blue/10 text-neon-blue border-neon-blue/30'
												}`}>
													{item.status === 'active' ? 'ACTIVE' : 'COMPLETED'}
												</div>
											</div>

											{/* Description */}
											<p className="text-gray-300 font-futura text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
												{item.description}
											</p>

											{/* Skills */}
											<div className="space-y-3">
												<h4 className="text-neon-cyan font-tech text-xs md:text-sm uppercase tracking-wider">
													Key Responsibilities
												</h4>
												<div className="grid grid-cols-1 gap-2 lg:gap-3 lg:grid-cols-2">
													{item.skills.map((skill, skillIndex) => (
														<motion.div
															key={skillIndex}
															className="flex items-center gap-3 p-2 rounded-lg glass border border-neon-blue/10 hover:border-neon-blue/30 transition-all duration-300"
															initial={{ opacity: 0, x: -20 }}
															whileInView={{ opacity: 1, x: 0 }}
															transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
															viewport={{ once: true }}
														>
															<div className={`w-2 h-2 bg-${item.color} rounded-full animate-pulse`}></div>
															<span className="text-gray-300 font-futura text-xs md:text-sm">{skill}</span>
														</motion.div>
													))}
												</div>
											</div>
										</div>
									</motion.div>
								</div>

								{/* Center Icon - Desktop */}
								<div className={cn("hidden lg:block relative z-30 flex-shrink-0", index % 2 === 0 ? 'ml-1' : 'mr-4')}>
									<motion.div 
										className={`w-16 h-16 glass rounded-full border-2 border-${item.color} flex items-center justify-center relative group bg-deep-space/80`}
										whileHover={{ 
											scale: 1.1,
											boxShadow: `0 0 20px rgba(0, 212, 255, 0.5)`
										}}
									>
										{/* Icon */}
										<div className={`text-${item.color} group-hover:scale-110 transition-transform duration-300`}>
											{item.icon}
										</div>
										
										{/* Pulse Ring */}
										<div className={`absolute inset-0 rounded-full border-2 border-${item.color}/30 animate-ping`}></div>
									</motion.div>
								</div>

								{/* Mobile Icon */}
								<div className="lg:hidden absolute left-0 top-4 z-20 flex-shrink-0">
									<motion.div 
										className={`w-10 h-10 glass rounded-full border-2 border-${item.color} flex items-center justify-center relative group`}
										whileHover={{ 
											scale: 1.1,
											boxShadow: `0 0 20px rgba(0, 212, 255, 0.5)`
										}}
									>
										{/* Icon */}
										<div className={`text-${item.color} group-hover:scale-110 transition-transform duration-300 text-sm`}>
											{item.icon}
										</div>
										
										{/* Pulse Ring */}
										<div className={`absolute inset-0 rounded-full border-2 border-${item.color}/30 animate-ping`}></div>
									</motion.div>
								</div>

								{/* Empty space for desktop alignment */}
								<div className="hidden lg:block flex-1"></div>
							</motion.div>
						))}
					</div>

				</div>
				{/* Bottom Accent */}
				<motion.div 
					className="mt-8 lg:mt-12 text-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					viewport={{ once: true }}
				>
					<div className="inline-flex items-center gap-3 text-neon-blue/70 font-tech text-xs md:text-sm">
						<span>// CONTINUOUS LEARNING & GROWTH</span>
						<div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};
