import { Anchor, AnchorLabel } from "@/components/anchor/Anchor";
import React from "react";
import Image from "next/image";
import logo from "/images/AVogT.png"
import { Server, Database, Key, Code, Lock, PlayCircle } from 'lucide-react';

function DemoThreePage({ children }) {
	return (
		<>
			<div className="min-h-screen flex flex-col bg-slate-50">
				<header className="max-w-screen-xl mx-auto w-full px-4">
					<div className="flex justify-between items-center">
						<h2 className="text-3xl text-slate-900 mt-10 font-medium">ASP.NET Core Web API School Management</h2>
						<Anchor href="/">
							<Image
								className="mt-5"
								src={logo}
								alt="logo"
								width={100}
								height={100}
								priority
							/>
						</Anchor>
					</div>
				</header>

				<main className="flex-1 max-w-screen-xl mx-auto w-full px-4 py-8">
					{/* Video and Content Layout */}
					<div className="flex flex-col lg:flex-row gap-8 items-center">
						{/* Video Section - Takes full width on mobile, ~60% on desktop */}
						<div className="w-full lg:w-3/5">
							<div className="bg-gray-100 p-4 rounded-lg shadow-md">
								<div className="relative pb-[56.25%] h-0">
									<iframe
										className="absolute top-0 left-0 w-full h-full rounded-md"
										src="https://www.youtube.com/embed/OjOB7Bp3MlM"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									/>
								</div>
							</div>
						</div>

						{/* Content Section - Takes full width on mobile, ~40% on desktop */}
						<div className="w-full lg:w-2/5">
							{/* Technical Overview */}
							<div className="bg-white p-6 rounded-md shadow-md border border-gray-100 mb-6">
								<h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
									<Server className="mr-2 text-blue-500" size={20} />
									Technical Overview
								</h3>
								<p className="text-gray-600 leading-relaxed">
									This project implements a RESTful API using ASP.NET Core Web API .NET 8, demonstrating core CRUD operations
									and JWT-based authentication. The system is designed to manage basic school information with SQL Server
									as the backend database.
								</p>
							</div>

							<div className="bg-white p-6 rounded-md shadow-md border border-gray-100">
								<h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
									<Database className="mr-1 text-blue-500" size={20} />
									CRUD Operations
								</h3>
								<div className="grid grid-cols-2 gap-4">
									{[
										{ icon: Code, text: 'Create: POST/api/ schools' },
										{ icon: Database, text: 'Read: GET All and By Id' },
										{ icon: Server, text: 'Update: PUT By Id' },
										{ icon: Lock, text: 'Delete: DELETE By Id' }
									].map((feature, index) => (
										<div key={index} className="flex items-center space-x-3 text-gray-700 p-3 bg-slate-50 rounded-lg">
											<feature.icon size={20} className="text-blue-500" />
											<span>{feature.text}</span>
										</div>
									))}
								</div>

							</div>
						</div>
					</div>

					{/* Features Grid - Full width with larger cards */}
					<div className="grid md:grid-cols-2 gap-8 mt-8">

						<div className="bg-white p-6 rounded-md shadow-md border border-gray-100 h-full">
							<h3 className="text-xl font-semibold mb-4 text-gray-800">
								Technology Stack
							</h3>
							<ul className="space-y-3">
								{[
									{ text: 'Backend Framework: ASP.NET Core Web API .NET 8', color: 'bg-gray-100' },
									{ text: 'Database: SQL Server', color: 'bg-blue-100' },
									{ text: 'Authentication: JWT (JSON Web Tokens)', color: 'bg-green-100' },
									{ text: 'API Testing: Swagger UI', color: 'bg-yellow-100' }
								].map((tech, index) => (
									<li key={index} className={`${tech.color} px-4 py-2 rounded-md text-gray-700`}>
										{tech.text}
									</li>
								))}
							</ul>
						</div>

						{/* Future Implementation */}
						<div className="bg-white p-6 rounded-md shadow-md border border-gray-100 h-full">
							<h3 className="text-xl font-semibold mb-4 text-gray-800">
								Future Implementation
							</h3>
							<ul className="space-y-4 text-gray-600">
								{[
									'Role-based Authorization',
									'Extended School Information Model',
									'Token Revocation System',
									'Enhanced Authentication Flow'
								].map((item, index) => (
									<li key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
										<div className="w-3 h-3 bg-blue-500 rounded-full" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</main>

				<footer className="max-w-screen-xl mx-auto w-full px-4 pb-8 pt-4">
					<div className="flex justify-end">
						<Anchor href="/">
							<AnchorLabel className="text-xl font-sans hover:font-mono text-white border bg-slate-500 py-2 px-5 rounded-lg hover:shadow-md">
								Main Page
							</AnchorLabel>
						</Anchor>
					</div>
				</footer>
			</div>
		</>
	);
}

export default DemoThreePage;