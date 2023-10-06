export default function Page() {
	return <div className="min-h-screen flex flex-col">

	<header className="py-6 flex gap-4 text-center justify-center text text-5l">
		<button>HOME</button>
		<button>BLOG</button>
		<button>ABOUT</button>
		<button>PLAYLIST</button>
		</header>

	<div className="flex-grow">

	</div>

	<footer className="flex py-12 bg-gray-300 text-center">
		<div className="w-2/6">Join Me</div>

		<div className="w-2/6">
			<div className="flex flex-col items-center">
			<div>Socials</div>
			<span>
				<a href="https://github.com/natevaub" target="_blank" className="mr-4">
					<i className="fa fa-github fa"></i>
				</a>
				<a href="https://www.linkedin.com/in/nathan-vaubien/" target="_blank" className="mr-4">
					<i className="fa fa-linkedin fa"></i>
				</a>
				<a href="https://www.linkedin.com/in/nathan-vaubien/" target="_blank" className="mr-4">
					<i className="fa fa-instagram fa"></i>
				</a>
			</span>
			</div>
		</div>
		<div className="w-2/6">Quote of the day</div>
	</footer>

	<p className="py-3 text-sm mt-auto text-center bg-gray-300">
		Copyright &#169; 2023 - Coded by natevaub 🥷🏼
	</p>

	</div>
}

