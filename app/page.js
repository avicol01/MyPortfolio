import { Anchor } from '@/components/anchor/Anchor'
import Image from "next/image";
import logo from "/images/AVogT.png";
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import IntroductionSection from "@/components/introduction/Introduction"
// import ContactForm from '@/components/Contact/contact';

export default function Home() {
	return (
		<div className="grid lg:grid-cols-2 container mx-auto max-w-screen-xl">
			<Sidebar />
			<MainContent />
		</div>
	);
}

// Sidebar 
function Sidebar() {
	return (
		<header className="lg:sticky top-0 p-10 grid-cols-1 lg:h-screen flex lg:items-center lg:justify-center">
			<div className="font-sans font-semibold bg-sky-400/10 border rounded-lg shadow-xl p-10">
				<h1 className="text-5xl hover:font-mono tracking-widest text-slate-700 mt-[3rem]">
					Andreea Vicol
				</h1>
				<h2 className="text-3xl py-4 tracking-wide text-slate-600">Junior Software Developer</h2>
				<p className="text-slate-600 md:mr-3 text-base py-3">
					In a constantly changing world, learning and growing are essential for success.
				</p>

				<Navigation />
				<SocialLinks />
			</div>
		</header>
	);
}

// Navigation
function Navigation() {
	const navItems = [
		{ id: "intro", label: "Introduction" },
		{ id: "skills", label: "Technical Skills" },
		{ id: "project", label: "My Projects" },
	];

	return (
		<nav>
			<ul className="p-8 text-slate-600 text-sm uppercase tracking-widest">
				{navItems.map((item) => (
					<li key={item.id} className="py-6 nav-text underline underline-offset-4 hover:text-slate-700 hover:font-bold">
						<a href={`#${item.id}`}>{item.label}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

// Socials
function SocialLinks() {
	return (
		<ul className="text-slate-500 mb-[3rem] mt-5 flex">
			<li className="pr-6">
				<a
					className="block hover:text-slate-700"
					href="https://ca.linkedin.com/in/andreea-vicol-bb1706228"
					target="_blank"
					rel="noreferrer noopener"
					aria-label="LinkedIn (opens in a new tab)"
					title="LinkedIn"
				>
					<span className="sr-only">LinkedIn</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true">
						<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
					</svg>
				</a>
			</li>
			<li className="">
				<a
					className="block hover:text-slate-700"
					href="https://github.com/avicol01"
					target="_blank"
					rel="noreferrer noopener"
					aria-label="GitHub (opens in a new tab)"
					title="GitHub"
				>
					<span className="sr-only">GitHub</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-7 w-7" aria-hidden="true">
						<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
					</svg>
				</a>
			</li>
			<li className="mb-3 ml-5">
				<a
					className="flex items-center hover:text-slate-700 px-3 py-[6px] rounded-md shadow-sm border border-slate-200"
					href="mailto:Andreea.Vicol01@gmail.com"
					aria-label="Email"
					title="Email"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 mr-2" aria-hidden="true">
						<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
						<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
					</svg>
					<span className="text-sm font-medium">Andreea.Vicol01@gmail.com</span>
				</a>
			</li>
		</ul>
	);
}

// Main content
function MainContent() {
	return (
		<main>
			<div className="mt-10 px-10">

				<div className="flex items-baseline justify-between mb-2">
					<div className="my-8">
						<h2 className="text-3xl font-sans font-semibold tracking-wider text-slate-800">
							Introduction
						</h2>
						<div className="h-1 w-24 mt-2 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
					</div>


					<Anchor href="/">
						<Image
							src={logo}
							alt="logo"
							width={100}
							height={100}
							priority
							className="ml-4"
						/>
					</Anchor>
				</div>

				<IntroductionSection />
			</div>

			{/* Skills section */}
			<section id="skills" className="m-6">
				<Skills />
			</section>

			{/* Projects section */}
			<section id="project" className="mt-4">
				<Projects />
			</section>
		</main>
	);
}

