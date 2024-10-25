import type { MovieDetails } from "@/api"
import { YoutubeVideo } from "@/modules/youtubeVideo"

type YoutubeVideoSectionProps = {
  videos: MovieDetails["videos"]["results"] | undefined
}

const YoutubeVideoSection = (props: YoutubeVideoSectionProps) => {
  const { videos } = props

  /* do not render the section if there are no videos */
  if (!videos || videos.length === 0) {
    return null
  }

  /* get first two videos */
  const youtubeVideos = videos.slice(0, 2)

  return (
    <section className="mx-auto flex max-w-[1140px] flex-col gap-x-8 xs:gap-x-10 gap-y-8 xs:gap-y-10 px-4 py-8 xs:py-10 sm:gap-x-12 sm:gap-y-12 sm:px-6 sm:py-12 md:gap-x-14 md:gap-y-14 md:px-8 md:py-16 lg:gap-x-16 lg:gap-y-16 lg:py-20 xl:px-0">
      {youtubeVideos.map((video) => {
        return (
          <div
            key={video.id}
            className="mx-auto flex w-[90%] flex-col gap-x-[2px] xs:gap-x-1 gap-y-[2px] xs:gap-y-1 sm:w-[80%] sm:gap-x-[6px] sm:gap-y-[6px] md:gap-x-2 md:gap-y-2"
          >
            <h2 className="mb-1 font-nunito font-semibold text-[16.75px] text-neutral-500 xs:text-[18px] sm:text-[18.75px] md:text-[22.75px] lg:text-[24px]">
              {video.name}
            </h2>
            <YoutubeVideo videoKey={video.key} />
          </div>
        )
      })}
    </section>
  )
}

export { YoutubeVideoSection }
