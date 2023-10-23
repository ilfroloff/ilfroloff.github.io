import { createSignal, onMount } from "solid-js";
import { Theme, getDefaultTheme } from "src/scripts/theme";
import Sun from "src/components/solid/icons/Sun";
import Moon from "src/components/solid/icons/Moon";

export default function ThemeToggle() {
  const [theme, setTheme] = createSignal<Theme>(Theme.Dark);

  const selectTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", Theme.Dark === newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  const toggle = () => {
    selectTheme(theme() === Theme.Light ? Theme.Dark : Theme.Light);
  };

  onMount(() => {
    selectTheme(
      (window.localStorage.getItem("theme") as Theme | undefined) ??
        getDefaultTheme(),
    );
  });

  return (
    <button onClick={toggle}>
      {theme() === Theme.Light ? (
        <Sun class="stroke-yellow-400 fill-yellow-400 hover:stroke-yellow-500 hover:fill-yellow-500 transition" />
      ) : (
        <Moon class="stroke-indigo-600 fill-indigo-600 hover:stroke-indigo-700 hover:fill-indigo-700 transition" />
      )}
    </button>
  );
}
