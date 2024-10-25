import { Input } from "@/modules/focusable"

type SearchInputProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = (props: SearchInputProps) => {
  const { value, onChange } = props

  return (
    <Input
      value={value}
      className="h-[40px] min-w-0 rounded-full bg-mode-900 px-6"
      placeholder="Search movies..."
      onChange={onChange}
    />
  )
}

export { SearchInput }
