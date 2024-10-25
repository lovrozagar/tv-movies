const BASE_FOCUSABLE_CLASSNAMES = [
  "relative inline-block text-mode-500 outline-none transition-[color,background-color,box-shadow] duration-150",
  /* spatial navigation focus */
  "data-[focused=true]:text-foreground",
  /* keyboard focus */
  "focus-visible:text-foreground",
  /* mouse hover */
  "hover:text-foreground",
] as const

const PRESSABLE_FOCUSABLE_CLASSNAMES = [
  ...BASE_FOCUSABLE_CLASSNAMES,
  /* base */
  "before:absolute before:top-0 before:left-0 before:z-[1] before:inline-block before:size-full before:ring-primary before:transition-[box-shadow] before:duration-150",
  /* spatial navigation focus */
  "before:ring-offset-[3px] data-[focused=true]:before:ring [&]:before:ring-offset-background",
  /* keyboard focus */
  "before:focus-visible:ring before:focus-visible:ring-offset-[3px]",
] as const

const INPUT_FOCUSABLE_CLASSNAMES = [
  ...BASE_FOCUSABLE_CLASSNAMES,
  /* base */
  "ring-primary [&]:ring-offset-background",
  /* spatial navigation focus */
  "ring-offset-[3px] data-[focused=true]:ring data-[focused=true]:text-foreground",
  /* keyboard focus */
  "focus-visible:ring focus-visible:ring-offset-[3px]",
] as const

export { PRESSABLE_FOCUSABLE_CLASSNAMES, INPUT_FOCUSABLE_CLASSNAMES }
