import type { CSSProperties } from "react"

type BackdropImageProps = {
  imageUrl: string
}

const BackdropImage = (props: BackdropImageProps) => {
  const { imageUrl } = props

  return (
    <div
      className="absolute inset-0 h-full w-full bg-center bg-cover"
      style={
        {
          backgroundImage: `url(${imageUrl})`,
        } as CSSProperties
      }
    />
  )
}

export { BackdropImage }
