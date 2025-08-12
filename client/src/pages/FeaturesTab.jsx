import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import VideoImg from "../assets/stock.png"; // Use any stock image you have

const tabs = [
	{
		label: "1:1 Video Calls",
		features: [
			{
				title: "Crystal-Clear Video",
				desc: "Reliable quality for distraction-free calls",
				icon: "📹",
			},
			{
				title: "Screen Share",
				desc: "Walk through work, demos in real time",
				icon: "🖥️",
			},
			{
				title: "Live Whiteboard",
				desc: "Reliable quality for distraction-free calls",
				icon: "📝",
			},
		],
		description:
			"One-on-One calls to connect directly, answer questions and share knowledge in real time.",
		image: VideoImg,
	},
	{
		label: "1:1 DMs",
		features: [
			{
				title: "Direct Messaging",
				desc: "Chat privately with your mentor",
				icon: "💬",
			},
			{
				title: "File Sharing",
				desc: "Share resources and notes easily",
				icon: "📁",
			},
			{
				title: "Instant Replies",
				desc: "Get answers in real time",
				icon: "⚡",
			},
		],
		description:
			"Message mentors directly to ask questions, share files, and get instant feedback.",
		image: VideoImg,
	},
	{
		label: "Webinars",
		features: [
			{
				title: "Group Sessions",
				desc: "Learn with others in live webinars",
				icon: "👥",
			},
			{
				title: "Q&A",
				desc: "Ask questions and get answers live",
				icon: "❓",
			},
			{
				title: "Session Recordings",
				desc: "Access past webinars anytime",
				icon: "🎥",
			},
		],
		description:
			"Join live webinars to learn from mentors, ask questions, and access recordings.",
		image: VideoImg,
	},
	{
		label: "Digital Content",
		features: [
			{
				title: "Exclusive Resources",
				desc: "Access curated guides and templates",
				icon: "📚",
			},
			{
				title: "Video Tutorials",
				desc: "Learn at your own pace",
				icon: "🎬",
			},
			{
				title: "Downloadable Content",
				desc: "Save materials for future use",
				icon: "⬇️",
			},
		],
		description:
			"Get access to exclusive digital content, tutorials, and downloadable resources.",
		image: VideoImg,
	},
];

const tabContentVariants = {
	initial: { opacity: 0, y: 30, scale: 0.98 },
	animate: { opacity: 1, y: 0, scale: 1 },
	exit: { opacity: 0, y: -30, scale: 0.98 },
};

const FeaturesTab = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className="w-full flex flex-col items-center py-12 px-4">
			<h2 className="text-center font-bold font-sans text-[#FC8019] text-3xl lg:text-5xl mb-8">
				Become a Mentor
			</h2>
			{/* Tabs for desktop */}
			<div className="hidden lg:flex w-full max-w-3xl justify-center border-b mb-8">
				{tabs.map((tab, idx) => (
					<button
						key={tab.label}
						className={`px-6 py-2 font-semibold text-lg transition-colors ${
							activeTab === idx
								? "text-[#FC8019] border-b-4 border-[#FC8019]"
								: "text-[#222] border-b-4 border-transparent"
						}`}
						onClick={() => setActiveTab(idx)}
					>
						{tab.label}
					</button>
				))}
			</div>
			{/* Tab content for desktop with animation */}
			<div className="hidden lg:flex w-full max-w-4xl items-center justify-between gap-12 min-h-[320px]">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						variants={tabContentVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={{ duration: 0.18, ease: "easeOut" }} // <-- Faster animation
						className="flex w-full items-center justify-between gap-12"
					>
						{/* Left: Features */}
						<div className="flex-1">
							<h3 className="font-bold text-[#222] text-2xl mb-2">
								{tabs[activeTab].label}
							</h3>
							<p className="text-gray-600 font-sans mb-6">
								{tabs[activeTab].description}
							</p>
							<ul className="flex flex-col gap-4">
								{tabs[activeTab].features.map((feature) => (
									<li key={feature.title} className="flex items-start gap-3">
										<span className="text-2xl">{feature.icon}</span>
										<div>
											<span className="font-semibold text-[#222]">
												{feature.title}
											</span>
											<div className="text-gray-500 text-sm">
												{feature.desc}
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
						{/* Right: Image */}
						<div className="flex-1 flex justify-center">
							<motion.img
								key={tabs[activeTab].image + activeTab}
								src={tabs[activeTab].image}
								alt={tabs[activeTab].label}
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{ duration: 0.18, ease: "easeOut" }} // <-- Faster animation
								className="w-[350px] h-[220px] object-cover rounded-xl shadow"
							/>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
			{/* Mobile: show all tab contents one after another */}
			<div className="flex flex-col gap-12 w-full lg:hidden">
				{tabs.map((tab) => (
					<motion.div
						key={tab.label}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.2, ease: "easeOut" }} // <-- Faster animation
						className="flex flex-col items-center"
					>
						<h3 className="font-bold text-[#222] text-xl mb-2">
							{tab.label}
						</h3>
						<p className="text-gray-600 font-sans mb-4 text-center">
							{tab.description}
						</p>
						<ul className="flex flex-col gap-4 mb-4">
							{tab.features.map((feature) => (
								<li key={feature.title} className="flex items-start gap-3">
									<span className="text-2xl">{feature.icon}</span>
									<div>
										<span className="font-semibold text-[#222]">
											{feature.title}
										</span>
										<div className="text-gray-500 text-sm">
											{feature.desc}
										</div>
									</div>
								</li>
							))}
						</ul>
						<img
							src={tab.image}
							alt={tab.label}
							className="w-[300px] h-[180px] object-cover rounded-xl shadow"
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default FeaturesTab;