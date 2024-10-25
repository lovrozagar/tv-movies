import {
  type UseSpatialNavigationProps,
  useSpatialNavigation,
} from "@/modules/focusable/hooks/useSpatialNavigation"
import { INPUT_FOCUSABLE_CLASSNAMES } from "@/modules/focusable/styles/focusableClassNames"
import { cn } from "@/utils"
import type { ComponentPropsWithoutRef } from "react"

/* foward input props, use onPress as isomorphic press handler between different inputs */
type InputProps = ComponentPropsWithoutRef<"input"> &
  Partial<Omit<UseSpatialNavigationProps, "type">>

const Input = (props: InputProps) => {
  const {
    onPress,
    onFocus,
    className,
    scrollable = false,
    autoFocus = false,
    disabledArrows = [],
    ...restProps
  } = props

  const focusable = useSpatialNavigation({
    type: "input",
    autoFocus,
    disabledArrows,
    scrollable,
    onPress,
    onFocus,
  })

  return (
    <input
      type="text"
      ref={focusable.ref}
      data-focused={focusable.focused}
      onClick={onPress}
      onKeyDownCapture={focusable.handleNativeEnterKeydown}
      className={cn(...INPUT_FOCUSABLE_CLASSNAMES, className)}
      {...restProps}
    />
  )
}

export { Input, type InputProps }
