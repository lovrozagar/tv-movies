import { useFreshRef } from "@/hooks/local/useFreshRef/useFreshRef"
import { useMemo } from "react"

function useDebounce<T extends Array<unknown>>(callback: (...args: T) => void, delay: number) {
  const freshCallback = useFreshRef(callback)

  let timer: NodeJS.Timeout | undefined

  const naiveDebounce = (func: (...args: T) => void, delayMs: number, ...args: T) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, delayMs)
  }

  /* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern */
  return useMemo(
    () =>
      (...args: T) =>
        naiveDebounce(freshCallback.current, delay, ...args),
    [delay],
  )
}

export { useDebounce }
