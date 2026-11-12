"use client";

import { PixelIcon } from "./PixelIcon";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing etc. — the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      title="Light / dark mode"
      className="grid size-11 cursor-pointer place-items-center hover:bg-band-ink/15"
    >
      <PixelIcon name="sun" className="hidden h-5 w-auto dark:block" />
      <PixelIcon name="moon" className="h-5 w-auto dark:hidden" />
    </button>
  );
}
