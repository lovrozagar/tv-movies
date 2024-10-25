import { EmptyIcon } from "@/components/icon"

type EmptyProps = {
  description: string
}

const Empty = (props: EmptyProps) => {
  const { description } = props

  return (
    <section className="flex flex-col items-center justify-center py-12">
      <EmptyIcon className="size-7" />
      <span className="mt-4">No results found.</span>
      <span className="mt-1 text-mode-400 text-sm">{description}</span>
    </section>
  )
}

export { Empty }
