import { useDebounce } from "@/hooks/local"
import { Button } from "@/modules/focusable"
import { Keyboard } from "@/modules/keyboard"
import { SearchInput } from "@/screens/search/components/SearchInput"
import { SEARCH_QUERY_PARAM_KEY } from "@/screens/search/constants/searchParams"
import { getSearchActionItems } from "@/screens/search/utils/getSearchActionItems"
import clsx from "clsx"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const queryParam = searchParams.get(SEARCH_QUERY_PARAM_KEY) ?? ""

  /* controlled input value, initial query param is initial value */
  const [value, setValue] = useState(queryParam)

  /* debounce search param change */
  const handleDebouncedChange = useDebounce((query: string) => {
    setSearchParams({ query }, { replace: true, preventScrollReset: true })
  }, 200)

  /* set state value and call debounce handler */
  const handler = (query: string) => {
    setValue(query)
    handleDebouncedChange(query)
  }

  /* input change handler */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value

    handler(query)
  }

  /* key press handler */
  const handleKeyPress = (key: string) => {
    const query = `${value}${key}`

    handler(query)
  }

  return (
    <form
      className="grid items-start gap-x-4 lg:grid-cols-[1fr_1.2fr]"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid items-start">
        <SearchInput value={value} onChange={handleChange} />
        <div className="mt-3 mb-8 xs:mb-0 flex flex-wrap justify-end gap-x-3 gap-y-3">
          {getSearchActionItems({ value, handler }).map(({ name, className, ...restProps }) => (
            <Button
              key={name}
              {...restProps}
              className={clsx(
                "xs:w-[120px] rounded-full bg-mode-900 px-4 py-2 font-medium text-xs uppercase",
                className,
              )}
            >
              {name}
            </Button>
          ))}
        </div>
      </div>
      <Keyboard onKeyPress={handleKeyPress} />
    </form>
  )
}

export { Search }
