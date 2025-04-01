import React from "react";

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	return (
		<div className="w-full bg-none font-sans md:px-10">
			<div className="relative max-w-7xl mx-auto pb-20">
				{data.map((item, index) => (
					<div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
						<div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
							<h3 className="hidden md:block text-xl md:pl-0 md:text-4xl font-bold text-neutral-500 dark:text-white ">
								{item.title}
							</h3>
						</div>

						<div className="relative pl-20 pr-4 md:pl-4 w-full">
							<h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
								{item.title}
							</h3>
							{item.content}{" "}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
