export default function () {
	return <div className="flex gap-4 flex-wrap p-4  justify-center">
		{[...Array(100)].map((x, i) =>
		<a href={`/blog/${i}`} target="_blank">
			<div className="p-10 shadow-xl rounded-lg w-[500px] flex flex-col gap-3 hover:-translate-y-3 cursor-pointer transition-all ease-in-out duration-300">
				<p className="text-3xl">
					Title {i}
				</p>

				<p className="line-clamp-3">
					Description {i}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit commodo purus eget scelerisque. Sed gravida magna at neque faucibus, a volutpat arcu scelerisque. Vivamus posuere et urna eu sodales. Nulla ultricies efficitur nunc at iaculis. Integer ultrices, enim eu dictum tincidunt, libero tellus condimentum turpis, quis vestibulum tortor ex in metus. In at tortor at erat sodales tristique quis vel neque. Integer eros lectus, interdum ac risus eu, pharetra euismod velit. Fusce non ante risus. Sed cursus vitae elit non vulputate. Mauris ac nunc finibus, feugiat urna eget, luctus sapien. Nunc ligula lectus, accumsan eu sem lacinia, porta ornare elit. Aliquam erat volutpat. Pellentesque eu dictum dolor. Nam vulputate tempus enim, eget bibendum sapien egestas sed. In consectetur odio et mauris tincidunt ultricies. Curabitur mattis nisi euismod elit dictum viverra.
				</p>


			</div>

		</a>
		)}
	</div>
}