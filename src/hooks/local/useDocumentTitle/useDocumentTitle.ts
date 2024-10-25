import { ENV } from "@/env"
import { useEffect } from "react"

type UseDocumentTitleProps = {
  title: string | undefined
}

function useDocumentTitle(props: UseDocumentTitleProps) {
  const { title } = props

  useEffect(() => {
    if (!title) return

    document.title = `${title ?? ENV.APP_NAME} | ${ENV.AUTHOR}`

    return () => {
      document.title = `${ENV.APP_NAME} | ${ENV.AUTHOR}`
    }
  }, [title])
}

export { useDocumentTitle }
