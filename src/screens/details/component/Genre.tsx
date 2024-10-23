type GenreProps = {
	name: string
}

const Genre = (props: GenreProps) => {
	const { name } = props

	return (
		<span className='genre rounded-full bg-neutral-900 px-[10px] py-[2.75px] text-[10.75px] xs:text-[11.75px] sm:px-3 sm:py-1 sm:text-[12px] md:text-[12.75px] dark:text-gray-300'>
			{name}
		</span>
	)
}

export { Genre }
