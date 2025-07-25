import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { CiAt } from "react-icons/ci";

export default function Footer() {
	return (
		<motion.footer 
			className="relative w-full py-12 overflow-hidden"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent"></div>
			<div className="absolute inset-0 cyber-grid opacity-5"></div>
			
			{/* Floating Particles */}
			<div className="absolute top-10 left-1/4 w-1 h-1 bg-neon-blue rounded-full animate-pulse-neon"></div>
			<div className="absolute top-20 right-1/3 w-2 h-2 bg-neon-cyan rounded-full animate-float"></div>
			<div className="absolute bottom-20 left-1/3 w-1 h-1 bg-neon-purple rounded-full animate-pulse-neon"></div>
			<div className="absolute bottom-10 right-1/4 w-2 h-2 bg-neon-pink rounded-full animate-float"></div>

			{/* Main Content */}
			<div className="relative z-10 max-w-6xl mx-auto px-6">
				{/* Top Section */}
				<motion.div 
					className="text-center mb-8"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h3 className="text-2xl font-cyber font-bold text-neon-blue neon-text mb-4">
						CONNECT WITH ME
					</h3>
					<div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mb-6"></div>
					
					{/* Social Links */}
					<div className="flex justify-center gap-6 mb-6">
						<motion.a 
							href="mailto:ankityadav11241@gmail.com" 
							className="group"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
								<CiAt className="text-xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
							</div>
						</motion.a>
						<motion.a 
							href="https://www.linkedin.com/in/ankityadav1121" 
							target="_blank" 
							className="group"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
								<FaLinkedin className="text-xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
							</div>
						</motion.a>
						<motion.a 
							href="https://github.com/ydv-ankit" 
							target="_blank" 
							className="group"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
								<FaGithub className="text-xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
							</div>
						</motion.a>
						<motion.a 
							href="https://twitter.com/ydvtwts" 
							target="_blank" 
							className="group"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
								<FaTwitter className="text-xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
							</div>
						</motion.a>
					</div>

					{/* Tagline */}
					<div className="glass-strong rounded-xl px-6 py-4 border border-neon-blue/20 max-w-md mx-auto">
						<p className="text-neon-cyan font-futura text-sm leading-relaxed">
							"The only way to do great work is to love what you do."
						</p>
					</div>
				</motion.div>

				{/* Divider */}
				<div className="w-full h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent mb-8"></div>

				{/* Bottom Section */}
				<motion.div 
					className="text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<div className="flex flex-col md:flex-row items-center justify-evenly gap-4">
						{/* Copyright */}
						<div className="text-neon-blue/70 font-tech text-sm">
							&copy; {new Date().getFullYear()} ANKIT YADAV.
						</div>

						{/* Status */}
						<div className="flex items-center gap-2 text-neon-green font-tech text-xs">
							<div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
							<span>ONLINE</span>
						</div>
					</div>

					{/* Bottom Accent */}
					<motion.div 
						className="mt-6 text-center"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<div className="inline-flex items-center gap-2 text-neon-blue/50 font-tech text-xs">
							<span>// THANK YOU FOR EXPLORING MY DIGITAL UNIVERSE</span>
							<div className="w-1 h-1 bg-neon-green rounded-full animate-pulse"></div>
						</div>
					</motion.div>
				</motion.div>
			</div>

			{/* Scan Line Effect */}
			<div className="absolute bottom-0 left-0 w-full h-1 scan-line"></div>
		</motion.footer>
	);
}
