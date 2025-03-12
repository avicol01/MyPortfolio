import { Anchor, AnchorLabel } from "@/components/anchor/Anchor";
import React from "react";
import Image from "next/image";
import logo from "/images/AVogT.png"
import { Code, ShoppingCart, Search, Lock, Settings, Database } from 'lucide-react';


async function DemoTwoPage({ children }) {
	return (
		<>

			<header className="max-w-screen-lg mx-auto">
				<div className="flex justify-between items-center">
					<h2 className="text-3xl text-slate-900 mt-10 font-medium">Frontend E-Commerce Website </h2>
					<Anchor
						href="/">
						<Image className="mt-5"
							src={logo}
							alt="logo"
							width={100}
							height={100}
						/>
					</Anchor>
				</div>
			</header>
			<main className="max-w-screen-lg mx-auto px-4 py-8">
				{/* Video Section */}
				<div className="flex flex-col items-center space-y-12">
					<div className="w-full max-w-3xl bg-gray-100 p-4 rounded-lg shadow-md">
						<div className="relative pb-[56.25%] h-0">
							<iframe
								className="absolute top-0 left-0 w-full h-full rounded-md"
								src="https://www.youtube.com/embed/Rzyajt6NtGU"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					</div>

					{/* Content Grid */}
					<div className="w-full grid md:grid-cols-2 gap-8">
						{/* Technical Overview */}
						<div className="bg-white p-6 rounded-md shadow-md border border-gray-100">
							<h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
								<Code className="mr-2 text-blue-500" size={20} />
								Technical Overview
							</h3>
							<p className="text-gray-600 leading-relaxed">
								This responsive e-commerce front-end website allows users to browse, search, and buy products.
								The site includes a shopping cart and clear navigation and works well on both desktop and mobile.
								This project highlights my skills in creating user-friendly designs with modern front-end tools.
							</p>
						</div>

						{/* Technology Stack */}
						<div className="bg-white p-6 rounded-md shadow-md border border-gray-100">
							<h3 className="text-xl font-semibold mb-4 text-gray-800">
								Technology Stack
							</h3>
							<ul className="space-y-3">
								{[
									{ text: 'Backend Framework: Next.js', color: 'bg-gray-100' },
									{ text: 'Language: React', color: 'bg-blue-100' },
									{ text: 'UI Libraries: Tailwind CSS', color: 'bg-green-100' }
								].map((tech, index) => (
									<li key={index} className={`${tech.color} px-4 py-2 rounded-md text-gray-700`}>
										{tech.text}
									</li>
								))}
							</ul>
						</div>

						{/* Key Features */}
						<div className="bg-white p-6 rounded-md shadow-md border border-gray-100">
							<h3 className="text-xl font-semibold mb-4 text-gray-800">
								Key Features
							</h3>
							<div className="grid grid-cols-2 gap-4">
								{[
									{ icon: ShoppingCart, text: 'Shopping Cart' },
									{ icon: Settings, text: 'Responsive Design' },
									{ icon: Database, text: 'State Management' },
									{ icon: Search, text: 'Search & Filtering' }
								].map((feature, index) => (
									<div key={index} className="flex items-center space-x-2 text-gray-700">
										<feature.icon size={18} className="text-blue-500" />
										<span>{feature.text}</span>
									</div>
								))}
							</div>
						</div>

						{/* Future Implementations */}
						<div className="bg-white p-6 rounded-md shadow-md border border-gray-100">
							<h3 className="text-xl font-semibold mb-4 text-gray-800">
								Future Implementations
							</h3>
							<ul className="space-y-3 text-gray-600">
								{[
									'User Authentication',
									'Advanced Filtering Options',
									'Admin Dashboard',
									'Database Integration'
								].map((item, index) => (
									<li key={index} className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-blue-500 rounded-full" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</main>
			<footer className="flex justify-end container mx-auto max-w-screen-xl m-10">
				<Anchor href="/">
					<AnchorLabel className="text-xl font-sans hover:font-mono text-white border bg-slate-500 py-2 px-5 rounded-lg hover:shadow-md">
						back to main page
					</AnchorLabel>
				</Anchor>
			</footer>
		</>
	);
}

export default DemoTwoPage;
