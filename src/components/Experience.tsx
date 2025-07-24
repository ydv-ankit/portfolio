import { Timeline } from "../ui/timeline";
const experienceData = [
	{
		title: "Backend & DevOps Engineer",
		content: (
			<div>
				<p className="text-neutral-500 dark:text-white text-sm md:text-base max-w-sm">
					WeVoice News
				</p>
				<p className="text-white dark:text-white text-sm md:text-base max-w-sm">
					August 2024 - Present
				</p>
			</div>
		),
	},
	{
		title: "Frontend Developer",
		content: (
			<div>
				<p className="text-white dark:text-white text-sm md:text-base max-w-sm">University Website</p>
				<p className="text-white dark:text-white text-sm md:text-base max-w-sm">
					August 2023 - May 2024
				</p>
			</div>
		),
	},
];
export const Experience = () => {
	return (
		<div className="flex flex-col gap-2 my-4">
			<h1 className="text-2xl font-bold border-b">Experience</h1>
			<Timeline data={experienceData} />
		</div>
	);
};
