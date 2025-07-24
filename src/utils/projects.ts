export enum ProjectCategory {
	FRONTEND = "frontend",
	BACKEND = "backend",
	AI = "ai",
	DEVOPS = "devops",
	FULLSTACK = "fullstack",
	TOOLS = "tools"
}

export enum CodeLinkIcon {
	FRONTEND = "🎨",
	BACKEND = "⚙️",
	CLI = "🛠️",
	FULLSTACK = "🌐",
	TOOLS = "🛠️"
}

export interface CodeLink {
	label: string;
	url: string;
	icon: CodeLinkIcon;
}

export interface project {
	title: string;
	cover: string;
	tags: string[];
	code_links?: CodeLink[];
	deploy_link: string;
	desc: string;
	categories?: ProjectCategory[];
}

export const projects: project[] = [
	{
		title: "LiveDocs",
		cover: "/assets/projects/livedocs.png",
		tags: ["typescript", "reactjs", "sentry", "clerk", "tailwindcss", "nextjs", "liveblocks"],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/livedocs", icon: CodeLinkIcon.FRONTEND },
		],
		deploy_link: "https://livedocs.ankitydv.in/",
		desc: "LiveDocs is a platform that allows users to create and share documents with others. It uses the NextJS framework to create a frontend and the Liveblocks library to create a real-time collaborative document.",
		categories: [ProjectCategory.FULLSTACK, ProjectCategory.FRONTEND, ProjectCategory.BACKEND],
	},
	{
		title: "AI Video Summarizer",
		cover: "/assets/projects/video_summarizer.png",
		tags: ["typescript", "reactjs", "google-gemini", "nodejs", "zustand", "python", "ffmpeg", "postgresql", "docker", "fastapi"],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/ai-video-summarizer", icon: CodeLinkIcon.FRONTEND },
			{ label: "Backend", url: "https://github.com/ydv-ankit/ai-video-summarizer-backend", icon: CodeLinkIcon.BACKEND }
		],
		deploy_link: "https://summarizer.ankitydv.in/",
		desc: "Built an AI video summarizer that allows users to upload a video and get summary of the video. It uses the Google Gemini API to generate the summary.",
		categories: [ProjectCategory.AI, ProjectCategory.FULLSTACK],
	},
	{
		title: "AI Quiz Generator",
		cover: "/assets/projects/ai_quiz_arch.png",
		tags: ["typescript", "nextjs", "appwrite", "nodejs", "api"],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/ai-quiz-generator", icon: CodeLinkIcon.FRONTEND }
		],
		deploy_link: "https://quiz.ankitydv.in/",
		desc: "Built an AI quiz generator that allows users to create MCQ-based quizzes tailored to their needs based on subject, topics, difficulty level, and number of questions—all in just a few clicks, all in just a click",
		categories: [ProjectCategory.AI, ProjectCategory.FRONTEND],
	},
	{
		title: "File Encryptor",
		cover: "/assets/projects/file_encryptor.png",
		tags: ["golang", "cryptography", "cli", "ci/cd", "TEA", "gh-actions"],
		code_links: [
			{ label: "CLI", url: "https://github.com/ydv-ankit/file-encryptor", icon: CodeLinkIcon.CLI },
		],
		deploy_link: "https://github.com/ydv-ankit/file-encryptor/releases/",
		desc: "Built a CLI tool that allows users to encrypt and decrypt files using the TEA algorithm. Used the Golang to implement the algorithm and build the CLI app. It uses the GitHub Actions to automate the build and release process.",
		categories: [ProjectCategory.TOOLS, ProjectCategory.DEVOPS],
	},
	{
		title: "Multithreaded Proxy Server with caching",
		cover: "/assets/projects/proxy_server.png",
		tags: ["c", "multithreading", "caching", "tcp", "sockets", "linux"],
		code_links: [],
		deploy_link: "https://github.com/ydv-ankit/multi-threaded-proxy-server",
		desc: "Built a multithreaded proxy server with caching that can handle multiple requests concurrently. It uses the TCP sockets to communicate with the client and the server. It uses the Linux system calls to implement the caching mechanism.",
		categories: [ProjectCategory.DEVOPS, ProjectCategory.BACKEND, ProjectCategory.TOOLS],
	},
	{
		title: "Secure Creds",
		cover: "/assets/projects/security-manager-arch.png",
		tags: ["typescript", "docker", "aws", "security", "AES algorithm", "node js"],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/security-manager-server", icon: CodeLinkIcon.FRONTEND }
		],
		deploy_link: "https://keys.ankitydv.in/",
		desc: "Secure Creds is a secure password manager that allows users to securely save their passwords and other sensitive data. It uses the AES algorithm to encrypt the data and the data is stored in a PostgreSQL database.",
		categories: [ProjectCategory.DEVOPS, ProjectCategory.BACKEND],
	},
	{
		title: "CryptoStats",
		cover: "/assets/projects/cryptostats.png",
		tags: ["react js", "react hooks", "recharts", "tailwindCSS", "API Integration"],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/crypto-stats", icon: CodeLinkIcon.FRONTEND }
		],
		deploy_link: "https://crypto-stats-phi.vercel.app/",
		desc: "Developed a cryptocurrency dashboard in React.js that fetches real-time data to display key details like prices, market caps, and trends, providing users with an interactive and dynamic view of the crypto market.",
		categories: [ProjectCategory.FRONTEND],
	},
	{
		title: "React Dashboard",
		cover: "/assets/projects/react-dashboard.png",
		tags: ["react js", "framer-motion", "tailwindCSS", "recharts", "dashboard"],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/react-dashboard-ui", icon: CodeLinkIcon.FRONTEND }
		],
		deploy_link: "https://react-dashboard-0.vercel.app",
		desc: "React dashboard powered by Framer Motion for smooth animations and Recharts for dynamic data visualizations! Bringing interactivity and insights together for a seamless user experience.",
		categories: [ProjectCategory.FRONTEND],
	},
	{
		title: "Repoguard",
		cover: "/assets/projects/repoguard.png",
		tags: ["node js", "meow", "pkg", "GitHub API", "RESTful API"],
		code_links: [
			{ label: "CLI Tool", url: "https://github.com/ydv-ankit/repoguard", icon: CodeLinkIcon.CLI }
		],
		deploy_link: "https://github.com/ydv-ankit/repoguard/releases",
		desc: "RepoGuard is a powerful command-line tool designed to streamline the management of GitHub repositories and using github tokens.",
		categories: [ProjectCategory.TOOLS],
	},
	{
		title: "PenPulse - Markdown Blogging Platform",
		cover: "/assets/projects/blog.png",
		tags: [
			"next js",
			"typescript",
			"supabase",
			"github",
			"zod",
			"auth",
			"zustand",
			"RestAPI",
			"shadcn",
			"tailwindCSS",
			"radix-ui",
		],
		code_links: [
			{ label: "Full Stack", url: "https://github.com/ydv-ankit/PenPulse", icon: CodeLinkIcon.FULLSTACK }
		],
		deploy_link: "https://pen-pulse.vercel.app/",
		desc: "This webapp uses nextjs power with markdown for easy content creation, authenticate securely through GitHub ensuring a smooth login experience, a personalized dashboard for managing blog posts.",
		categories: [ProjectCategory.FULLSTACK, ProjectCategory.FRONTEND],
	},
	{
		title: "B-Social WebApp",
		cover: "/assets/projects/bsocial.png",
		tags: [
			"aws",
			"node js",
			"react js",
			"mongoDB",
			"mongoose",
			"zustand",
			"RestAPI",
			"firebase",
			"MUI",
		],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/B-Social", icon: CodeLinkIcon.FRONTEND },
			{ label: "Backend", url: "https://github.com/ydv-ankit/B-Social-Server", icon: CodeLinkIcon.BACKEND }
		],
		deploy_link: "https://b-social-lovat.vercel.app/",
		desc: "A fullstack social media app using React.js and Node.js. Implemented user authentication, real-time posting, liking, commenting, and following features. Utilized RESTful APIs, and MongoDB for database integration.",
		categories: [ProjectCategory.FULLSTACK, ProjectCategory.BACKEND],
	},
	{
		title: "GYM Fitness",
		cover: "/assets/projects/gym.png",
		tags: ["reactjs", "MUI", "animation", "responsive"],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/GYM-Fitness", icon: CodeLinkIcon.FRONTEND }
		],
		deploy_link: "https://my-fitness-gym.netlify.app/",
		desc: "Developed a gym fitness website using the RapidAPI API and MUI. Integrated animated images for comprehensive guide and ensured a responsive, user-friendly interface with Material-UI components.",
		categories: [ProjectCategory.FRONTEND],
	},
	{
		title: "Analog Clock",
		cover: "/assets/projects/analog_clock.png",
		tags: ["CSS", "Javascript", "Math"],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/analog-clock", icon: CodeLinkIcon.FRONTEND }
		],
		deploy_link: "https://analog-clock-swart-eta.vercel.app/",
		desc: "An analog clock using HTML, CSS, and JavaScript. Implemented the clock face and hands with HTML and CSS, and used JavaScript to animate the hands based on the current time.",
		categories: [ProjectCategory.FRONTEND],
	},
	{
		title: "Secure Password Generator",
		cover: "/assets/projects/secure_password.png",
		tags: ["CSS", "Javascript", "algorithm", "math"],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/secure-password", icon: CodeLinkIcon.FRONTEND }
		],
		deploy_link: "https://password-secure.netlify.app/",
		desc: "Developed a secure password generator using HTML, CSS, and JavaScript. Features customizable password length and options for including uppercase letters, numbers, and special characters.",
		categories: [ProjectCategory.TOOLS, ProjectCategory.FRONTEND],
	},
	{
		title: "Digital Clock",
		cover: "/assets/projects/digital_clock.png",
		tags: ["CSS", "Javascript"],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/digital-clock", icon: CodeLinkIcon.FRONTEND }
		],
		deploy_link: "https://digital-clock-ashy-seven.vercel.app/",
		desc: "Digital clock using HTML, CSS, and JavaScript. Displays the current time with hours, minutes, and seconds, and updates in real-time. Styled for a clean and modern look with responsive design.",
		categories: [ProjectCategory.FRONTEND],
	},
	{
		title: "Guess the number",
		cover: "/assets/projects/guess_the_number.png",
		tags: ["CSS", "Javascript", "math"],
		code_links: [
			{ label: "Frontend", url: "https://github.com/ydv-ankit/Guess-the-number", icon: CodeLinkIcon.FRONTEND }
		],
		deploy_link: "https://guess-the-number-ebon-delta.vercel.app/",
		desc: "Users input guesses to find a randomly generated number within a specified range. Implemented user-friendly interface and interactive game logic.",
		categories: [ProjectCategory.FRONTEND],
	},
];
