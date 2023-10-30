export enum Theme {
  Light = "light",
  Dark = "dark",
}

export function getDefaultTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? Theme.Dark
    : Theme.Light;
}
