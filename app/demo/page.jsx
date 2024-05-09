import { Anchor, AnchorLabel } from '@/components/anchor/Anchor'
import React from 'react';
import { Carousel } from "flowbite-react";

async function DemoPage({ children }) {

	// const payload = await getToDoItems()
	// const tasks = Object.entries(payload.todos).reverse()

	return (
		<>
			<header className="mt-10 ml-5">


				<h2 className="text-5xl text-slate-900">Transaction System </h2>
			</header>
			<main className=" max-w-md mx-auto  py-24">
				<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
					<Carousel>
						<div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
							Slide 1
						</div>
						<div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
							Slide 2
						</div>
						<div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
							Slide 3
						</div>
					</Carousel>
				</div>
			</main>
			<footer>
				<Anchor href="/">
					<AnchorLabel className="text-xl font-sans hover:font-mono text-slate-200">
						back to main page
					</AnchorLabel>
				</Anchor>
			</footer>

		</>
	)
}

export default DemoPage
