import React from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { CiAt } from "react-icons/ci";

const Profile = () => {
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["Full Stack Developer", "DevOps Guy"],
			typeSpeed: 60,
			loop: true,
			backSpeed: 40,
			backDelay: 300,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div className="relative overflow-hidden">
			<div
				className="absolute inset-0 lg:rounded-3xl hidden lg:block space-x-4 opacity-30"
				style={{
					background: `url("/assets/img/profile_bg.png")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					filter: "brightness(0.6) ",
				}}></div>
			<div className="relative flex flex-col items-center justify-center min-h-[30rem] py-24">
				<img
					width={192}
					height={192}
					className="rounded-full border-4 border-blue-200"
					src="/assets/img/profile.jpeg"
					alt="profile pic"
				/>
				<div className="text-4xl font-bold m-2 relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 font-mono">
					Ankit Yadav
				</div>
				<div className="text-2xl font-bold m-2">
					<span ref={el} />
				</div>
				<div className="flex mt-2">
					<Link to="mailto:ankityadav11241@gmail.com" className="text-2xl mx-2">
						<CiAt className="text-blue-200" />
					</Link>
					<Link
						to="https://www.linkedin.com/in/ankityadav1121"
						className="text-2xl mx-2"
						target="_blank">
						<FaLinkedin className="text-blue-200" />
					</Link>
					<Link to="https://github.com/ydv-ankit" className="text-2xl mx-2" target="_blank">
						<FaGithub className="text-blue-200" />
					</Link>
					<Link to="https://twitter.com/ydvtwts" className="text-2xl mx-2" target="_blank">
						<FaTwitter className="text-blue-200" />
					</Link>
				</div>
				<div className="mt-6 mb-6 relative">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-xl rounded-full"></div>
					<div className="relative bg-gradient-to-r from-blue-600/10 to-green-600/10 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-2xl">
						<div className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-green-300 text-center leading-relaxed">
							Transforming Ideas into Powerful Digital Solutions
						</div>
					</div>
				</div>
				<div className="flex">
					<Link to={"https://resume.ankitydv.in"} target="_blank">
						<button className="bg-slate-500 bg-opacity-30 border-x border-y outline-none px-4 py-2 rounded-md m-2 hover:bg-white duration-100 hover:duration-300 hover:text-blue-600 font-semibold">
							Resume
						</button>
					</Link>
					<Link to={"mailto:ankityadav11241@gmail.com"}>
						<button className="bg-slate-500 bg-opacity-30 border-x border-y outline-none px-4 py-2 rounded-md m-2 hover:bg-white duration-100 hover:duration-300 hover:text-blue-600 font-semibold">
							Hire Me
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Profile;
