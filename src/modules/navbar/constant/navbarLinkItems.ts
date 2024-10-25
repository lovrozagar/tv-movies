import { BookmarkIcon, HomeIcon, SearchIcon, TrendIcon } from "@/components/icon"
import { getNavigationPath } from "@/utils"

const NAVBAR_LINK_ITEMS = [
  {
    href: getNavigationPath("/"),
    disabledArrows: ["up"],
    "aria-label": "Trending",
    Icon: HomeIcon,
  },
  {
    href: getNavigationPath("/trending"),
    disabledArrows: ["up"],
    "aria-label": "Trending",
    Icon: TrendIcon,
  },
  {
    href: getNavigationPath("/search"),
    disabledArrows: ["up"],
    "aria-label": "Search",
    Icon: SearchIcon,
  },
  {
    href: getNavigationPath("/watch-later"),
    disabledArrows: ["up"],
    "aria-label": "Watch later",
    Icon: BookmarkIcon,
  },
] as const

export { NAVBAR_LINK_ITEMS }
