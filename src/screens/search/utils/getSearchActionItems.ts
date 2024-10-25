import type { ButtonProps } from "@/modules/focusable"

type GetSearchActionItemsProps = {
  value: string
  handler: (query: string) => void
}

const getSearchActionItems = (props: GetSearchActionItemsProps) => {
  const { value, handler } = props

  return [
    {
      name: "Clear",
      onPress: () => handler(""),
    },
    {
      name: "Space",
      onPress: () => handler(`${value} `),
    },
    {
      name: "Backspace",
      onPress: () => handler(value.slice(0, -1)),
    },
    {
      name: "Search",
      type: "submit",
      className: "block lg:hidden",
    },
  ] satisfies ButtonProps[]
}

export { getSearchActionItems }
