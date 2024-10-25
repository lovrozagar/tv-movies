import { useWatchLaterStore } from "@/stores"

const NavbarWatchLaterCount = () => {
  const movieIds = useWatchLaterStore((store) => store.movieIds)

  const count = movieIds.length

  if (!count) return null

  return (
    <div className="absolute bottom-0.5 left-8 flex aspect-square size-3.5 items-center justify-center rounded-full bg-primary font-bold text-[11px] text-primary-foreground">
      {count}
    </div>
  )
}

export { NavbarWatchLaterCount }
