const KEYBOARD_KEY_ITEMS = [
  ...Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)) /* 'a' to 'z' */,
  ...Array.from({ length: 10 }, (_, i) => i.toString()) /* '0' to '9' */,
  "." /* dot */,
  "-" /* dash */,
]

export { KEYBOARD_KEY_ITEMS }
