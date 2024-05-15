import {Toaster} from '@/components/ui/sonner'


import '@/css/globals.css'

export const metadata = {
	title: 'Andreea Vicol',
	description: 'Best to do list of the year in DMIT',
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body className="bg-sky-100/30">
				{children}
				<Toaster
					position="top-center"
					visibleToasts={1}
					toastOptions={{
						unstyled: true,
					}}
				/>
			</body>
		</html>
	)
}
