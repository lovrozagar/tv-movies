import type { MovieItem } from "@/api"
import { BookmarkFilledIcon, BookmarkIcon } from "@/components/icon"
import { useMotion } from "@/hooks/local"
import type { UseMovieDetailsQueryReturn } from "@/hooks/query"
import { Button } from "@/modules/focusable"
import { WatchLaterButton } from "@/modules/watchLater/button/components/WatchLaterButton"
import { Cast } from "@/screens/details/components/Cast"
import { Genre } from "@/screens/details/components/Genre"
import { PlayNowLink } from "@/screens/details/components/PlayNowLink"
import { cn } from "@/utils"
import { m } from "framer-motion"
import { useState } from "react"

type DetailsProps = {
  movieId: number
  responseData: UseMovieDetailsQueryReturn["data"] | MovieItem
}

const Details = (props: DetailsProps) => {
  const { movieId, responseData } = props

  const { fadeDown, staggerContainer } = useMotion()

  const [show, setShow] = useState<boolean>(false)

  const toggleShow = () => setShow((prev) => !prev)

  return (
    <m.div
      variants={staggerContainer(0.2, 0.4)}
      initial="hidden"
      animate="show"
      className="mb-8 flex max-w-[90vw] flex-1 flex-col gap-x-3 xs:gap-x-[14px] gap-y-3 xs:gap-y-[14px] text-foreground sm:max-w-[80vw] sm:gap-x-4 sm:gap-y-4 md:max-w-[520px] lg:gap-x-5 lg:gap-y-5"
    >
      <m.h2
        variants={fadeDown}
        className="max-w-[280px] xs:max-w-[320px] font-extrabold text-[28.75px] xs:text-3xl leading-snug xs:leading-normal sm:max-w-[420px] sm:text-4xl sm:leading-[1.2] md:max-w-[420px]"
      >
        {responseData?.title}
      </m.h2>

      {responseData && "genres" in responseData ? (
        <m.ul
          variants={fadeDown}
          className="flex flex-row flex-wrap items-center gap-x-[6px] xs:gap-x-3 gap-y-[6px] xs:gap-y-3 sm:gap-x-[14px] sm:gap-y-[14px]"
        >
          {responseData?.genres.map((genre) => (
            <Genre key={genre.id} name={genre.name} />
          ))}
        </m.ul>
      ) : null}

      <m.p
        variants={fadeDown}
        className="text-[14.25px] xs:text-[15.75px] leading-relaxed sm:text-base"
      >
        <span>
          {(responseData?.overview.length ?? 0) > 280
            ? `${show ? responseData?.overview : `${responseData?.overview.slice(0, 280)}...`}`
            : responseData?.overview}
        </span>
        <Button
          className={cn(
            "ml-1 p-0 text-white hover:underline",
            (responseData?.overview.length ?? 0) > 280 ? "inline-block" : "hidden",
          )}
          onPress={toggleShow}
        >
          {!show ? "show more" : "show less"}
        </Button>
      </m.p>

      <m.div variants={fadeDown}>
        {responseData && "genres" in responseData ? (
          <Cast cast={responseData?.credits?.cast || []} />
        ) : null}

        <div className="mt-6 flex xs:flex-row flex-col xs:items-center xs:justify-center">
          <PlayNowLink movieId={movieId} />
          <WatchLaterButton movieId={movieId}>
            {({ isSaved }) => (
              <>
                {isSaved ? "Saved" : "Watch later"}
                {isSaved ? (
                  <BookmarkFilledIcon className="size-5" />
                ) : (
                  <BookmarkIcon className="size-5" />
                )}
              </>
            )}
          </WatchLaterButton>
        </div>
      </m.div>
    </m.div>
  )
}

export { Details }
