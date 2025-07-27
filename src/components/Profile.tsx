import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { CgMail } from "react-icons/cg";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Profile = () => {
	const typedRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (typedRef.current) {
			const typed = new Typed(typedRef.current, {
				strings: [
					"Software Engineer",
					"Full Stack Development",
					"DevOps",
					"AI/ML"
				],
				typeSpeed: 50,
				backSpeed: 30,
				backDelay: 2000,
				loop: true,
				showCursor: true,
				cursorChar: '|',
				autoInsertCss: true,
			});

			return () => {
				typed.destroy();
			};
		}
	}, []);

	return (
		<div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full mx-auto">
			{/* Main Content */}
			<motion.div 
				className="relative z-10 text-center w-full max-w-4xl mx-auto px-6"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				{/* Profile Image Container */}
				<motion.div 
					className="relative mb-8 flex justify-center"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{/* Profile Image */}
					<div className="relative">
						<img
							width={200}
							height={200}
							className="rounded-full border-4 border-neon-blue shadow-2xl shadow-neon-blue/50 relative z-10"
							src="/assets/img/profile.jpeg"
							alt="Ankit Yadav"
						/>
					</div>
				</motion.div>

				{/* Name */}
				<motion.h1 
					className="text-6xl font-cyber font-black mb-4 neon-text text-neon-blue text-center"
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					ANKIT YADAV
				</motion.h1>

				<div className="mb-4 text-center text-neon-cyan  md:text-2xl h-6 flex items-center justify-center">
					<span ref={typedRef}></span>
				</div>

				{/* Social Links */}
				<motion.div 
					className="flex justify-center gap-6 mb-8"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
				>
					<Link to="mailto:ankityadav11241@gmail.com" className="group">
						<div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
							<CgMail className="text-2xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
						</div>
					</Link>
					<Link to="https://www.linkedin.com/in/ankityadav1121" target="_blank" className="group">
						<div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
							<FaLinkedin className="text-2xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
						</div>
					</Link>
					<Link to="https://github.com/ydv-ankit" target="_blank" className="group">
						<div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
							<FaGithub className="text-2xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
						</div>
					</Link>
					<Link to="https://twitter.com/ydvtwts" target="_blank" className="group">
						<div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-neon-blue/30 hover:border-neon-blue transition-all duration-300 group-hover:scale-110">
							<FaTwitter className="text-2xl text-neon-blue group-hover:text-neon-cyan transition-colors" />
						</div>
					</Link>
				</motion.div>

				{/* Tagline */}
				<motion.div 
					className="mb-8 flex justify-center"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 1 }}
				>
					<div className="glass-strong rounded-2xl px-8 py-6 border border-neon-blue/20 max-w-2xl">
						<div className="text-xl font-futura font-medium text-neon-cyan leading-relaxed text-center">
							"Transforming Ideas into Powerful Digital Solutions"
						</div>
					</div>
				</motion.div>

				{/* Action Buttons */}
				<motion.div 
					className="flex flex-wrap justify-center gap-4 mb-12"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1.2 }}
				>
					<Link to="https://resume.ankitydv.in" target="_blank">
						<button className="btn-futuristic">
							<span className="relative z-10">VIEW RESUME</span>
						</button>
					</Link>
					<Link to="mailto:ankityadav11241@gmail.com">
						<button className="btn-futuristic bg-gradient-to-r from-neon-purple to-neon-pink">
							<span className="relative z-10">HIRE ME</span>
						</button>
					</Link>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Profile;
