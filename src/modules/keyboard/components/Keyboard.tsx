import { Button } from "@/modules/focusable"
import { KEYBOARD_KEY_ITEMS } from "@/modules/keyboard/constants/keyboardKeys"

type KeyboardProps = {
  onKeyPress: (key: string) => void
}

const Keyboard = (props: KeyboardProps) => {
  const { onKeyPress } = props

  return (
    <div className="hidden justify-center lg:flex">
      <ul className="grid grid-cols-10 gap-x-1 gap-y-1 self-center justify-self-center">
        {KEYBOARD_KEY_ITEMS.map((key) => (
          <li key={key} className="flex">
            <Button
              className="flex-1 rounded bg-mode-900 px-4 py-2"
              onPress={() => onKeyPress(key)}
            >
              {key.toUpperCase()}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Keyboard }
